import clienteAxios from '../../config/clienteAxios'
import { GET_EMPLEOS } from '../utils/constants';


export function getEmpleos() {
   return async function (dispatch) {
      try {
         const resp = await clienteAxios('empleos/remotive');
         return dispatch({
            type: GET_EMPLEOS,
            payload: resp.data.data,
          });
      } catch (error) {
         console.log(error.message);
      }
   }
}