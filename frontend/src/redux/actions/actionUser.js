import clienteAxios from "../../config/clienteAxios";
import { toast } from "react-toastify";
import {
  GOOGLE_LOGIN,
  // IS_ADMIN,
  // UPDATE_NOMBRE,
  UPDATE_USER,
  // BORRAR_USUARIO,
  LOGIN_USER,
  AUTH_USER,
  RESET_ERROR_LOGUIN_USER,
  VALIDATE_USER,
  SEND_EMAIL_TO_RESET_PASSWORD,
  RESET_PASSWORD,
  RESET_ERROR,
  ACTUAL,
  REFRESH_TOKEN,
  LOGOUT_USER
} from "../utils/constants.js";

export function registroGoogle(googleData) {
  return async function (dispatch) {
    const token = googleData.credential;

    try {
      const response = await clienteAxios.post(`/users/google`, {
        idToken: token,
      });
      const json2 = await clienteAxios(`/users/refresh`);
      localStorage.setItem("token", json2.data.data.token);
      return dispatch({
        type: GOOGLE_LOGIN,
        payload: response.data.data,
      });
    } catch (err) {
      toast.error(err);
    }
  };
}

export function registerUser({ name, email, password1 }) {
  return async function () {
    try {
      const body = {
        name,
        email,
        password: password1,
      };
      const response = await clienteAxios.post(`/users/create`, body);
      toast.success(response.data);
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };
}

export function loginUser(payload) {
  return async function (dispatch) {

    try {
      const json = await clienteAxios.post(`/users/login`, payload);
      const json2 = await clienteAxios(`/users/refresh`);
      localStorage.setItem("token", json2.data.data.token);
      dispatch({
        type: LOGIN_USER,
        payload: json.data.data,
      });
      return dispatch({
        type: REFRESH_TOKEN,
        payload: json2.data.data
      });
    } catch (e) {
      return dispatch({
        type: LOGIN_USER,
        payload: { error: e.response.data.msg },
      });
    }
  };
}

export function refreshToken() {
  return async function (dispatch) {
    const json = await clienteAxios(`/users/refresh`)
    return dispatch({
      type: REFRESH_TOKEN,
      payload: json.data.data
    });
  };
}

export function logoutSession() {
  return async function (dispatch) {
    const json = await clienteAxios('/users/logout')
    localStorage.removeItem('token')
    return dispatch({
      type: LOGOUT_USER,
      payload: json.data.data
    });
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
      var json = await clienteAxios.patch(`/users/confirm/${id}`);
      toast.success("User validated successfully");
      return dispatch({
        type: VALIDATE_USER,
        payload: json.data.data,
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

export function authenticateUser() {
  return async function (dispatch) {
    try {
      let json = await clienteAxios(`/users/perfil/`);
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
    const { token } = (await clienteAxios(`/users/refresh`)).data.data
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const json = await clienteAxios("/users/actual", config);
      return dispatch({
        type: ACTUAL,
        payload: json.data.data,
      });
    } catch (e) {
      console.log(e.response);
    }
  };
}

export const comprarProducto = async (productId, type) => {
  // const usuarioId = localStorage.getItem("token");
  const { token } = (await clienteAxios(`/users/refresh`)).data.data
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const data = await clienteAxios.post(
      `/productos/comprar/${type}/${productId}`,
      null,
      config
    );
    return data.data.error;
  } catch (error) {
    console.log(error)
  }
};

export const enviarRecibo = async (email, name, address, product) => {

  let body = { email, name, address, product };

  try {
    await clienteAxios.post(`/productos/enviar-recibo`, body);
  } catch (error) {
    console.log(error);
  }
};

export function updateUser(id) {
  return async function (dispatch) {
    try {
      var json = await clienteAxios.patch(`/perfil/${id}`);
      toast.success("User updated successfully");
      return dispatch({
        type: UPDATE_USER,
        payload: json.data.data,
      });
    } catch (error) {
      toast.error("There was an error validating the user");
      return dispatch({
        type: UPDATE_USER,
        payload: error.response.data,
      });
    }
  };
}
