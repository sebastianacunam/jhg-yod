import { response } from "../../utils/response.js";
import { comprar_producto } from "../../services/compra-productos/comprar-producto.services.js";

/*************************************************************************/
// Relación entre cada tipo de Producto y el Usuario que lo Solicita/Compra.

export const comprarProducto = async (req, res) => {
  const { id, type } = req.params
  const usuarioId = req.usuario._id;
  const usuario = await comprar_producto(id, type, usuarioId);
  response(res, 201, usuario);
};