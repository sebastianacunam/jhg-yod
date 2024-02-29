import nodemailer from "nodemailer";
import { envs } from "../conf/envs.js";

const { EMAIL_HOST, EMAIL_PORT, EMAIL_PASS, EMAIL_SECURE, EMAIL_USER, FRONTEND_URL } = envs;

export const emailRegistro = async (datos) => {
  const { email, name, token } = datos;
  var transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_SECURE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Nestify" <nestifyla@gmail.com>',
    to: email,
    subject: "Nestify - Confirma tu cuenta",
    text: "Confirma tu cuenta en Nestify",
    html: `
        <h3>Hola, ${name} por favor, sigue el link de abajo para confirmar tu cuenta</h3>
        <a href="${FRONTEND_URL}/confirm/${token}"><h4>Confirmar Cuenta</h4></a>
        <p>Si no fuiste quién creó la cuenta, entonces por favor, desestima este correo.</p>
            `,
  });
}

export const emailOlvidePassword = async (datos) => {
  const { email, token } = datos;

  var transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_SECURE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Nestify" <nestifyla@gmail.com>',
    to: email,
    subject: "Nestify - Resetea tu contraseña",
    text: "Resetea tu contraseña en Nestifyla",
    html: `
        <p>Hola, haz click en el link para cambiar tu contraseña</p>
        <a href="${FRONTEND_URL}/olvide-password/${token}"> CAMBIAR CONTRASEÑA </a>
        <p>Si no fuiste quién solicitó el cambio de contraseña, entonces por favor, desestima este correo.</p>
            `,
  });
};

export const emailSendRecibo = async (data) => {

  const { email, name, address, product } = data;
  
  var transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_SECURE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Nestify" <nestifyla@gmail.com>',
    to: email,
    subject: "Nestify - Compra Realizada",
    text: "Ha adquirido un producto de nuestra plataforma, se anexa el recibo con los datos de su compra. ¡Muchas gracias!",
    html: `
        <h3>Cliente: ${name}</h3>
        <p><strong>Producto</strong>: ${product.type} | <strong>Nombre</strong>: ${product.name} | <strong>Precio</strong>: $ ${product.price} USD</p>
        <p>${product.description}</p>
        <h4>Datos Registrados en la Compra:</h4>
        <p><strong>País</strong>: ${ address.country ? address.country : "No especificado" }</p>
        <p><strong>Estado / Provincia</strong>: ${ address.state ? address.state: "No especificado" }</p>
        <p><strong>Ciudad</strong>: ${ address.city ? address.city : "No especificado" }</p>
        <p><strong>Dirección - Primera Línea</strong>: ${ address.line1 ? address.line1 : "No especificado" }</p>
        <p><strong>Dirección - Segunda Línea</strong>: ${ address.line2 ? address.line2 : "No especificado" }</p>
        <p><strong>Código Postal</strong>: ${ address.postal_code ? address.postal_code : "No especificado" } 
        <br />
        <p>No responda a este correo.</p>
            `,
  })

  return { msg: "Mensaje Enviado", name: name, email: email };
}