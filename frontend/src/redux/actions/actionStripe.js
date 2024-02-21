import clienteAxios from '../../config/clienteAxios'

export const getSessionStripe = async (id, obj) => {
    try {
        const json = await clienteAxios.post(`/payment/create-checkout-session/${id}`, obj);
        return json.data.data;
    } catch(error) {
        console.log(error);
    }
};