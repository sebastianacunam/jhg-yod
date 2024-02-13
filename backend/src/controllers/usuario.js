import { all_users } from "../services/usuarios/all-users.services.js";
import { autenticarUsuario } from "../services/usuarios/autenticar-usuario.services.js";
import { confirmUsuario } from "../services/usuarios/confirmar-usuario.services.js";
import { delete_user } from "../services/usuarios/delete-user.services.js";
import { nuevaPassword } from "../services/usuarios/nueva-password.services.js";
import { olvide_password } from "../services/usuarios/olivde-password.services.js";
import { profile } from "../services/usuarios/perfil.services.js";
import { register } from "../services/usuarios/register.services.js";
import { updateUser } from "../services/usuarios/update-user.js";
import { usuarioActual } from "../services/usuarios/usuario.services.js";
import { response } from "../utils/response.js";

/*************************************************************************/
//Crear/registrar usuario Google.
export const googleLogin = async ({ body }, res) =>{
    const { idToken } = body;
    const user = await googleLoginService(idToken)
    // console.log(user, 'a ver qué trae user google login')
    response(res, 201, user)
}


/*************************************************************************/
// Crear/registrar un usuario
export const createUser = async ({ body }, res) => {
  const { email, name, password } = body;
  const obj = { email, name, password };
  const user = await register(obj);
  response(res, 201, user);
};

/*************************************************************************/
//Editar usuario
export const editUser = async (req, res) => {
  const { userId } = req.params;
  const data = req.body;
  const updatedUser = await updateUser(userId, data);
  response(res, 201, updatedUser);
};

/*************************************************************************/
//Confirmar usuario
export const confirm = async ({ params }, res) => {
  const { token } = params;
  const result = await confirmUsuario(token);
  response(res, 201, result);
};

/*************************************************************************/
//Autenticar información del usuario al momento del login
//Para autenticar primero debemos confirmar al usuario
export const authenticate = async ({ body }, res) => {
  const { email, password } = body;
  const user = await autenticarUsuario({ email, password });
  response(res, 201, user);
};

/*************************************************************************/
//Traer todos los Usuarios Registrados
export const allUsers = async (req, res) => {
  const users = await all_users();
  response(res, 201, users);
};

/*************************************************************************/
//Eliminar un usuario por ID
export const deleteUser = async ({ params }, res) => {
  const { id } = params;
  const user = await delete_user(id);
  response(res, 201, user);
};

/*************************************************************************/
//Olvide password de un usuario
export const olvidePassword = async ({ body }, res) => {
  const { email } = body;
  const emailUser = await olvide_password(email);
  response(res, 201, emailUser);
};

// export const comprobarToken = async (req, res) => {
//     const { token } = req.params;

//     const tokenValido = await Usuario.findOne({ token });

//     if (tokenValido) {
//         res.json({ msg: 'Token valido y el usuario existe!' })
//     } else {
//         const error = new Error('Invalid token');
//         return res.status(404).json({ msg: error.message });
//     }
// };

export const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const newPassword = await nuevaPassword({ token, password });
  response(res, 201, newPassword);
};

/*************************************************************************/
//Mostrar información del perfil que está logueado.
export const perfil = async ({ usuario }, res) => {
  const { name } = usuario;
  const user = await profile(name);
  response(res, 201, user);
};

export const usuario = async ({ usuario }, res) => {
  const { name } = usuario;
  const user = await usuarioActual({ name });
  response(res, 201, user);
};

/*************************************************************************/
