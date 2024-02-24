import clienteAxios from "../../config/clienteAxios";
import {
  GET_MENTORIAS,
  DELETE_MENTORIAS,
  POST_MENTORIAS,
  PUT_MENTORIAS,
} from "../utils/constants";
import { toast } from "react-toastify";

export function getMentorias() {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.get("/mentorias");
      return dispatch({ type: GET_MENTORIAS, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//!
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
      console.log(error);
    }
  };
}
//!
export function deleteMentorias(id) {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.delete(`/mentorias/delete/${id}`);
      return dispatch({ type: DELETE_MENTORIAS, payload: response.data });
    } catch (error) {
      console.log(error.message);
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
      console.log(error.message);
    }
  };
}

export async function getMentoriaById(id) {
  try {
      const json = await clienteAxios.get(`/mentorias/${id}`);
      return json.data;
  } catch(error) {
    return error.response.data
  }
};