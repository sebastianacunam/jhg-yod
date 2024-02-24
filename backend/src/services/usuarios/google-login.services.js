import Usuario from "../../models/usuario.js";
import generateJWT from "../../helpers/generateJWT.js";
import { OAuth2Client } from "google-auth-library";
import { envs } from "../../conf/envs.js";

const { CLIENT_ID } = envs
const client = new OAuth2Client(CLIENT_ID);

export const googleLoginService = async (idToken) => {
    try {
        const response = await client.verifyIdToken({
            idToken,
            audience: CLIENT_ID,
        });
        const { email_verified, picture, given_name, email } = response.payload;

        if (email_verified) {
            let user = await Usuario.findOne({ email }).exec();

            if (user) {
                const token = generateJWT(user._id);
                const { _id, name, email } = user;
                return { _id, name, token, email };
            } else {
                let nuevoUsuario = new Usuario({
                    name: given_name,
                    email,
                    image: { public_id: "", url: picture },
                });

                nuevoUsuario.confirmed = true;
                const tokenprueba = generateJWT(nuevoUsuario._id);
                nuevoUsuario.token = tokenprueba;

                const respuesta = await nuevoUsuario.save();
                return respuesta;
            }
        }

        const usuario = new Usuario({});
    } catch (error) {
        console.log(error);
    }
};