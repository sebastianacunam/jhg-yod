import clienteAxios from "../../config/clienteAxios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorHandler } from "../../utils/errorHandler.js"
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
  LOGOUT_USER,
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
      throw new ErrorHandler(err.response.data.message);
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
      throw new ErrorHandler(e.response.data.message);
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
        payload: json2.data.data,
      });
    } catch (e) {
      toast.error(e.response.data.message, {
        position: "top-center",
        style: { marginTop: "20rem", },
        theme: "colored"
      });
      throw new ErrorHandler(e.response.data.message);
    }
  };
}

export function refreshToken() {
  return async function (dispatch) {
    try {
      const json = await clienteAxios(`/users/refresh`);
      return dispatch({
        type: REFRESH_TOKEN,
        payload: json.data.data,
      });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function logoutSession() {
  return async function (dispatch) {
    try {
      const json = await clienteAxios("/users/logout");
      localStorage.removeItem("token");
      return dispatch({
        type: LOGOUT_USER,
        payload: json.data.data,
      });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
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
  const customId = "custom-id-yes";
  return async function (dispatch) {
    try {
      var json = await clienteAxios.patch(`/users/confirm/${id}`);
      toast.success("User validated successfully");
      return dispatch({
        type: VALIDATE_USER,
        payload: json.data.data,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: { marginTop: "20rem", },
        theme: "colored",
        toastId: customId
      });
      dispatch({
        type: VALIDATE_USER,
        payload: error.response.data,
      });
      throw new ErrorHandler(error.response.data.message);
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
      throw new ErrorHandler(error.response.data.message);
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
      dispatch({
        type: SEND_EMAIL_TO_RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      });
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function resetPassword(data) {
  const { token, password } = data;
  return async function (dispatch) {
    try {
      let json = await clienteAxios.patch(`/users/olvide-password/${token}`, {
        password,
      });
      return dispatch({
        type: RESET_PASSWORD,
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD,
        payload: { error: error.response.data.msg },
      });
      throw new ErrorHandler(error.response.data.message);
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
    const { token } = (await clienteAxios(`/users/refresh`)).data.data;
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
      throw new ErrorHandler(e.response.data.message);
    }
  };
}

export const comprarProducto = async (datosCompra) => {
  const { producto } = datosCompra;
  const { type, _id } = producto;
  try {
    const data = await clienteAxios.post(
      `/productos/comprar/${type}/${_id}`,
      datosCompra
    );
    return data.data.error;
  } catch (error) {
    throw new ErrorHandler(error.response.data.message);
  }
};

export function updateUser(userId, data) {
  return async function (dispatch) {
    try {
      let json = await clienteAxios.patch(`/perfil/${userId}`, data);
      return dispatch({
        type: UPDATE_USER,
        payload: json.data,
      });
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : "Ocurrio un error";
      dispatch({
        type: UPDATE_USER,
        payload: errorMessage,
      });
      throw new ErrorHandler(error.response.data.message);
    }
  };
}
