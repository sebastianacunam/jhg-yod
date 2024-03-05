import clienteAxios from '../../config/clienteAxios'
import { ErrorHandler } from '../../utils/errorHandler';
import { GET_EMPLEOS } from '../utils/constants';


export function getEmpleos(query = '') {
   return async function (dispatch) {
      try {
         const resp = await clienteAxios(`empleos/remotive${query}`);
         if (resp.data.error === true) {
            throw new ErrorHandler("Hubo un error al cargar los empleos");
         }
         return dispatch({
            type: GET_EMPLEOS,
            payload: resp.data.data,
         });
      } catch (error) {
         throw new ErrorHandler("Hubo un error al cargar los empleos");
      }
   }
}