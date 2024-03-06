import clienteAxios from "../../config/clienteAxios";
import {
  GET_ANUNCIOS,
  DELETE_ANUNCIOS,
  POST_ANUNCIOS,
  PUT_ANUNCIOS,
} from "../utils/constants";
import { toast } from "react-toastify";
import { ErrorHandler } from "../../utils/errorHandler.js"

export function getAnuncios() {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.get("/anuncios");
      return dispatch({ type: GET_ANUNCIOS, payload: response.data.data });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function postAnuncios({ name, description }) {
  return async function () {
    const body = {
      name,
      description,
    };
    try {
      const response = await clienteAxios.post("/anuncios/create", body);
      toast.success(response.data);
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export async function getAnuncioById(id) {
  try {
      const json = await clienteAxios.get(`/anuncios/${id}`);
      return json.data;
  } catch(error) {
    throw new ErrorHandler(error.response.data.message);
  }
}