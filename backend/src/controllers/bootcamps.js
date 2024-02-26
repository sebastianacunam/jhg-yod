import { all_bootcamps } from "../services/bootcamps/all-bootcamps.services.js";
import { create_bootcamp } from "../services/bootcamps/create-bootcamp.services.js";
import { delete_bootcamp } from "../services/bootcamps/delete-bootcamp.services.js";
import { edit_bootcamp } from "../services/bootcamps/edit-bootcamp.services.js";
import { find_bootcamp } from "../services/bootcamps/find-bootcamp.services.js";
import { response } from "../utils/response.js";

/*************************************************************************/
// TRAER TODOS los Bootcamps

export const getBootcamps = async (req, res) => {
  const bootcamps = await all_bootcamps();
  response(res, 200, bootcamps);
};

/*************************************************************************/
// TRAER UN Bootcamp por ID

export const findBootcamp = async ({ params }, res) => {
  const { id } = params;
  const bootcamp = await find_bootcamp(id);
  response(res, 200, bootcamp);
};

/*************************************************************************/
// CREAR UN nuevo Bootcamp

export const createBootcamp = async ({ body }, res) => {
  const { name, description, price } = body;
  const obj = { name, description, price };
  const bootcamp = await create_bootcamp(obj);
  response(res, 201, bootcamp);
};

/*************************************************************************/
// EDITAR UN Bootcamp

export const editBootcamp = async ({ body, params }, res) => {
  const data = body;  
  const { id } = params;
  const bootcamp = await edit_bootcamp(data, id);
  response(res, 200, bootcamp);
};

/*************************************************************************/
// ELIMINAR UN Bootcamp por ID

export const deleteBootcamp = async ({ params }, res) => {
  const { id } = params;
  const bootcamp = await delete_bootcamp(id);
  response(res, 200, bootcamp);
};