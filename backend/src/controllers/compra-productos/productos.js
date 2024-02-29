import { response } from "../../utils/response.js";
import { comprar_producto } from "../../services/compra-productos/comprar-producto.services.js";
import { emailSendRecibo } from "../../helpers/emailjs.js";

/*************************************************************************/
// Relación entre cada tipo de Producto y el Usuario que lo Solicita/Compra.

export const comprarProducto = async (req, res) => {
  const { productId, type } = req.params
  const { id } = req
  const usuario = await comprar_producto(productId, type, id);
  response(res, 201, usuario);
};

export const enviarRecibo = async ({ body }, res) => {
  const confirmacion = await emailSendRecibo(body);
  response(res, 200, confirmacion);
};