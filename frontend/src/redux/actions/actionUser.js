import clienteAxios from '../../config/clienteAxios'
import { toast } from "react-toastify";
import { 
  // GOOGLE_LOGIN, 
  // LOGOUT_USER, 
  // IS_ADMIN,
  // UPDATE_NOMBRE,
  // BORRAR_USUARIO,
  LOGIN_USER, 
  AUTH_USER, 
  RESET_ERROR_LOGUIN_USER,
  VALIDATE_USER,
  SEND_EMAIL_TO_RESET_PASSWORD,
  RESET_PASSWORD,
  RESET_ERROR,
  ACTUAL,
} from '../utils/constants.js'


export function registerUser({name, email, password1}){
  return async function(dispatch){
    try {
      const body = {
          name, 
          email, 
          password: password1,
      }
      const response = await clienteAxios.post(`/users/create`, body)
      toast.success(response.data)

    } catch (e) {
      console.log(e.response.data.msg)
    }
  }
}


export function loginUser(payload){
  return async function(dispatch){
    try {
      let json = await clienteAxios.post(`/users/login`, payload);
      localStorage.setItem("token", json.data.data.token);
      // console.log(prueba, 'a ver ')
      return dispatch({
        type: LOGIN_USER,
        payload: json.data.data,
      });
    } catch (e) {
      return dispatch({
        type: LOGIN_USER,
        payload: { error: e.response.data.msg },
      });
    }
  }
}


export function resetErrorLoginUser() {
  return function (dispatch) {
    let nada = [];
    return dispatch({
      type: RESET_ERROR_LOGUIN_USER,
      payload: nada,
    });
  };
}


export function validateUser(id) {
  return async function (dispatch) {
    try {
      var json = await clienteAxios(`/users/confirm/${id}`);
      toast.success("User validated successfully");
      return dispatch({
        type: VALIDATE_USER,
        payload: json.data,
      });
    } catch (error) {
      toast.error("There was an error validating the user");
      return dispatch({
        type: VALIDATE_USER,
        payload: error.response.data,
      });
    }
  };
}


export function authenticateUser(config) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios(`/users/perfil/`, config);
      return dispatch({
        type: AUTH_USER,
        payload: json.data,
      });
    } catch (error) {
        console.log(error.response.data);
    }
  };
}


export function setToResetPassword(data) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios.post(`/users/olvide-password/`, {
        email: data,
      });

      toast.success(json.data.msg);

      return dispatch({
        type: SEND_EMAIL_TO_RESET_PASSWORD,
        payload: json.data,
      });
    } catch (error) {
      toast.error(error.response.data.msg);
      return dispatch({
        type: SEND_EMAIL_TO_RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      });
    }
  };
}


export function resetPassword(data) {
  const { token, password } = data;
  return async function (dispatch) {
    try {
      let json = await clienteAxios.post(`/users/olvide-password/${token}`, {
        password,
      });
      return dispatch({
        type: RESET_PASSWORD,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      });
    }
  };
}


export function setStateEmail() {
  return async function (dispatch) {
    let reset = [];
    return dispatch({
      type: RESET_ERROR,
      payload: reset,
    });
  };
}


export function usuarioActual() {
  return async function (dispatch) {
    const id = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${id}`,
      },
    };
    try {
      const json = await clienteAxios('/users/actual', config);
      console.log('usuario actual desde el action', json)
      
      return dispatch({
        type: ACTUAL,
        payload: json.data.data,
      });
    } catch (e) {
      console.log(e.response.data.data);
    }
  };
}