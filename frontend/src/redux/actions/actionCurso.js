import clienteAxios from '../../config/clienteAxios'
import { toast } from "react-toastify";
import {
    DELETE_CURSO,
    UPDATE_CURSO,
    GET_CURSOS,
    BUY_CURSO
} from '../utils/constants.js'
import { ErrorHandler } from "../../utils/errorHandler.js"


export function getCursos() {
    return async function (dispatch) {
        try {
            const json = await clienteAxios.get('/cursos')
            return dispatch({
                type: GET_CURSOS,
                payload: json.data
            })
        } catch (error) {
            throw new ErrorHandler(error.response.data.message);
        }
    }
}

export async function getCursoById(id) {
    try {
        const json = await clienteAxios.get(`/cursos/${id}`);
        return json.data;

    } catch (error) {
        throw new ErrorHandler(error.response.data.message);
    }
}

export function updateCurso(payload) {
    return async function (dispatch) {
        try {
            let waving = 'say hi'
            console.log(waving)
        } catch (error) {
            throw new ErrorHandler(error.response.data.message);
        }
    }
}

export const buyProducto = async (id, payment) => {
    try {
        const json = await clienteAxios.post(`/payment/create-checkout-session/${id}`, payment);
        return json.data.data;
    } catch (error) {
        throw new ErrorHandler(error.response.data.message);
    }
}