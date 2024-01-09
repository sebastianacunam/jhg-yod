import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, name, token } = datos;
    // console.log(datos, 'a ver qué trae datos ')
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Nestify" <nestifyla@gmail.com>',
    to: email,
    subject: "Nestify - Confirma tu cuenta",
    text: "Confirma tu cuenta en Nestify",
    html: `
        <h3>Hola, ${name} por favor, sigue el link de abajo para confirmar tu cuenta</h3>
        <a href="${process.env.FRONTEND_URL}/confirm/${token}"><h4>Confirmar Cuenta</h4></a>
        <p>Si no fuiste quién creó la cuenta, entonces por favor, desestima este correo.</p>
            `,
    // html: `
    //     <h3>Hola, ${name} por favor, sigue el link de abajo para confirmar tu cuenta</h3>
    //     <a href="${process.env.FRONTEND_URL}/users/confirm/${token}"><h4>Confirmar Cuenta</h4></a>
    //     <p>Si no fuiste quién creó la cuenta, entonces por favor, desestima este correo.</p>
    //         `,
  });
}

// export const emailOlvidePassword = async (datos) => {
//   const { email, nombre, token } = datos;

//   var transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: process.env.EMAIL_SECURE,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const info = await transport.sendMail({
//     from: '"Books Market" <cuentas@booksmarket.com>',
//     to: email,
//     subject: "Books Market - Reset your password",
//     text: "Reset your account password on Books Market",
//     html: `
//         <p>Hi ${nombre} click on the link to enter a new password</p>
//         <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> CHANGE PASSWORD </a>
//         <p>If you were not the one who created the account you can ignore this email</p>
//             `,
//   });
// };