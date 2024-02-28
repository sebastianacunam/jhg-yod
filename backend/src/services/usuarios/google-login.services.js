import Usuario from "../../models/usuario.js";
import generateJWT, {generateRefreshToken} from "../../helpers/generateJWT.js";
import { OAuth2Client } from "google-auth-library";
import { envs } from "../../conf/envs.js";
import bcrypt from 'bcrypt'

const { CLIENT_ID } = envs
const client = new OAuth2Client(CLIENT_ID);

export const googleLoginService = async (idToken, res) => {
    console.log('google login service: ',idToken)
    try {
        const response = await client.verifyIdToken({
            idToken,
            audience: CLIENT_ID,
        });

        const { email_verified, picture, given_name, email } = response.payload;

        if (email_verified) {
            let user = await Usuario.findOne({email}).exec();
            if (!user) {
                const salt = await bcrypt.genSalt(10);
                const pass = await bcrypt.hash(idToken, salt);

                const nuevoUsuario = new Usuario({
                    name: given_name,
                    email,
                    image: { public_id: "", url: picture },
                    password: pass,
                });

                nuevoUsuario.confirmed = true;
                // const { token } = generateJWT(nuevoUsuario._id);
                // nuevoUsuario.token = token
                const respuesta = await nuevoUsuario.save();
                generateRefreshToken(respuesta._id, res)
                
                return respuesta
                
            } else {
                const { token } = generateJWT(user._id);
                generateRefreshToken(user._id, res)
                const { _id, name, email } = user;
                return { _id, name, token, email };
            }
        }
        const usuario = new Usuario({});
    } catch (error) {
        console.log('a ver...',error.message);
    }
};