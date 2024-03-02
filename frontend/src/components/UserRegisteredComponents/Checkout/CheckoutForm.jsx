import { React, useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router";
import { buyProducto } from "../../../redux/actions/actionCurso";

import { comprarProducto } from "../../../redux/actions/actionUser";

import { getCursoById } from "../../../redux/actions/actionCurso";
import { getBootcampById } from "../../../redux/actions/actionBootcamps";
import { getMentoriaById } from "../../../redux/actions/actionMentorias";
import { getAnuncioById } from "../../../redux/actions/actionAnuncios";

import "../../../assets/scss/layout/_checkoutForm.scss";
import "../../../assets/scss/base/_globales.scss";
import { useSelector } from "react-redux";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const idProducto = useParams();

  const [producto, setProducto] = useState({});
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);

  const userActual = useSelector((state) => state.usuarioActual);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(idProducto.id);

      if (data.error === true) {
        data = await getBootcampById(idProducto.id);
        if (data.error === true) {
          data = await getMentoriaById(idProducto.id);
          if (data.error === true) {
            data = await getAnuncioById(idProducto.id);
          }
        }
      }

      setProducto(data.data);
    };
    fetchData();
  }, [idProducto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: address,
    });
    setLoading(true);

    if (!error) {
      const pm = paymentMethod.id;
      try {
        const buy = await buyProducto(producto._id, {
          type: producto.type,
          pm,
          price: producto.price,
          description: producto.description,
          qty: 1,
        });
        if (buy.client_secret) {
          const response = await comprarProducto({
            email: userActual.email,
            name: userActual.name,
            address: address.address,
            producto,
          });
          if (response === false) {
            alert("Pago recibido!");
            navigate("/compra-exitosa");
          } else {
            alert("Pago rechazado!");
          }
        } else {
          alert("Pago rechazado!");
        }
        elements.getElement(CardElement).clear();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("COMPLETE LOS CAMPOS REQUERIDOS");
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <div className="asdasdasdasd">
        <div className="container-top">
          <h3 className="product-type">
            {producto.type === "MENTORIA"
              ? `¡La ${producto.type} ya es casi tuya!`
              : `¡El ${producto.type} ya es casi tuyo!`}
          </h3>
        </div>

        <div className="container-bot">
          <div className="left-side">
            <h3>{producto.name}</h3>
            <h3>Precio: {producto.price} USD</h3>
            <p>{producto.description}</p>
          </div>

          <div className="right-side">
            <h3 className="payment-heading">Información de Pago</h3>
            <form onSubmit={handleSubmit} className="form-box">
              <div className="checkout-form-container">
                <div className="inner-checkout-form">
                  <AddressElement
                    onChange={(e) => {
                      setAddress(e.value);
                    }}
                    options={{ mode: "billing" }}
                  />
                  <br />
                  <CardElement />
                </div>
              </div>
              <div className="btn-cont">
                <button
                  disabled={!stripe}
                  type="submit"
                  className="checkout-btn"
                >
                  {loading ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="sr-only">Cargando...</span>
                    </div>
                  ) : (
                    "Comprar"
                  )}
                </button>
              </div>
            </form>
            <p className="footer-text">
              la información de tu tarjeta de crédito esta encriptada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
