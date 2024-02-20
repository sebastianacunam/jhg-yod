import clienteAxios from "../../config/clienteAxios";
import {
  GET_BOOTCAMPS,
  DELETE_BOOTCAMPS,
  PUT_BOOTCAMPS,
} from "../utils/constants";
import { toast } from "react-toastify";

export function getBootcamps() {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.get("/bootcamps");
      return dispatch({ type: GET_BOOTCAMPS, payload: response.data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//!
export function postBootcamps({ name, description }) {
  return async function () {
    const body = {
      name,
      description,
    };
    try {
      const response = await clienteAxios.post("/bootcamps/create", body);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
//!
export function deleteBootcamps(id) {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.delete(`/bootcamps/delete/${id}`);
      return dispatch({ type: DELETE_BOOTCAMPS, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateBootcamps(id, updatedData) {
  return async function (dispatch) {
    try {
      const response = await clienteAxios.put(
        `/bootcamps/edit/${id}`,
        updatedData
      );
      return dispatch({ type: PUT_BOOTCAMPS, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
