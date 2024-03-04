import { response } from "../../utils/response.js";
import { comprar_producto } from "../../services/compra-productos/comprar-producto.services.js";

/*************************************************************************/
// Relación entre cada tipo de Producto y el Usuario que lo Solicita/Compra.

export const comprarProducto = async (req, res) => {
  const { productId, type } = req.params;
  const { id } = req;
<<<<<<< HEAD
  const usuario = await comprar_producto(productId, type, id);
=======
  const usuario = await comprar_producto(productId, type, id, req.body);
>>>>>>> f5e8a7ea79f81879251ed117b3d3712259af4c52
  response(res, 201, usuario);
};
