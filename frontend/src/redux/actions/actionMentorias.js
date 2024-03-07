import clienteAxios from "../../config/clienteAxios";
import {
  GET_MENTORIAS,
  DELETE_MENTORIAS,
  POST_MENTORIAS,
  PUT_MENTORIAS,
} from "../utils/constants";
import { toast } from "react-toastify";
import { ErrorHandler } from "../../utils/errorHandler.js"

export function getMentorias() {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.get("/mentorias");
      return dispatch({ type: GET_MENTORIAS, payload: response.data });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function postMentorias({ name, description }) {
  return async function () {
    const body = {
      name,
      description,
    };
    try {
      const response = await clienteAxios.post("/mentorias/create", body);
      toast.success(response.data);
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function deleteMentorias(id) {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.delete(`/mentorias/delete/${id}`);
      return dispatch({ type: DELETE_MENTORIAS, payload: response.data });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export function updateMentorias(id, updatedData) {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.put(
        `/mentorias/edit/${id}`,
        updatedData
      );
      return dispatch({ type: PUT_MENTORIAS, payload: response.data });
    } catch (error) {
      throw new ErrorHandler(error.response.data.message);
    }
  };
}

export async function getMentoriaById(id) {
  try {
    const json = await clienteAxios.get(`/mentorias/${id}`);
    return json.data;
  } catch (error) {
    throw new ErrorHandler(error.response.data.message);
  }
}