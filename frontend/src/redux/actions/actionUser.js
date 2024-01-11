import clienteAxios from '../../config/clienteAxios'
import { toast } from "react-toastify";


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
            localStorage.setItem("token", json.data.token);
            return dispatch({
                type: "LOGIN_USER",
                payload: json.data,
            });
        } catch (e) {
            return dispatch({
                type: "LOGIN_USER",
                payload: { error: error.response.data.msg },
            });
        }
    }
}


export function resetErrorLoginUser() {
    return function (dispatch) {
      let nada = [];
      return dispatch({
        type: "RESET_ERROR_LOGUIN_USER",
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
          type: "VALIDATE_USER",
          payload: json.data,
        });
      } catch (error) {
        toast.error("There was an error validating the user");
        return dispatch({
          type: "VALIDATE_USER",
          payload: error.response.data,
        });
      }
    };
}


export function authenticateUser(config) {
    return async function (dispatch) {
        try {
            let json = await clienteAxios(`/users/confirm/`, config);
            return dispatch({
                type: "AUTH_USER",
                payload: json.data,
            });
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };
}