import clienteAxios from '../../config/clienteAxios';
import { ErrorHandler } from "../../utils/errorHandler.js"

export const getSessionStripe = async (id, obj) => {
    try {
        const json = await clienteAxios.post(`/payment/create-checkout-session/${id}`, obj);
        return json.data.data;
    } catch(error) {
        throw new ErrorHandler(error.response.data.message);
    }
};