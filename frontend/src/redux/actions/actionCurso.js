import clienteAxios from '../../config/clienteAxios'
import { toast } from "react-toastify";
import { 
    DELETE_CURSO, 
    UPDATE_CURSO,
    GET_CURSOS,
    BUY_CURSO
} from '../utils/constants.js'


export function getCursos(){
    return async function(dispatch){
        try {
            const json = await clienteAxios.get('/cursos')
            return dispatch({
                type: GET_CURSOS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export async function getCursoById(id) {
    try {
        let json;
        json = await clienteAxios.get(`/cursos/${id}`);
        if (json.data.error === true) {
            json = await clienteAxios.get(`/mentorias/${id}`);
            if (json.data.error === true) {
                json = await clienteAxios.get(`/bootcamps/${id}`);
            };
        };
        return json.data.data;
    } catch(error) {
        console.log(error)
    }
};

export function updateCurso(payload){
    return async function(dispatch){
        try {
            let waving = 'say hi'
            console.log(waving)
        } catch (error) {
            console.log(error)
        }
    }
}

export function buyCurso(payment, id){
    return async function(dispatch){
        try {
            const json = await  clienteAxios.post(`/create-checkout-session/${id}`, payment)
            console.log("qué trae buyCurso desde las actions: ",json)
            return dispatch({
                type: BUY_CURSO,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}