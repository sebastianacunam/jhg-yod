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
      const response = await clienteAxios.get("/");
      return dispatch({ type: GET_MENTORIAS, payload: response.data });
    } catch (error) {
      console.log(error);
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
      const response = await clienteAxios.post("/create", body);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
