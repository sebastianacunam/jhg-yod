import { all_cursos } from "../services/cursos/all-cursos.services.js";
import { comprar_producto } from "../services/compra-productos/comprar-producto.services.js";
import { create_curso } from "../services/cursos/create-curso.services.js";
import { delete_curso } from "../services/cursos/delete-curso.services.js";
import { edit_curso } from "../services/cursos/edit-curso.services.js";
import { find_curso } from "../services/cursos/find-curso.services.js";
import { response } from "../utils/response.js";

/*************************************************************************/
// TRAER TODOS los Cursos

export const getCursos = async (req, res) => {
  const cursos = await all_cursos();
  response(res, 200, cursos);
};

/*************************************************************************/
// TRAER UN Curso por ID

export const findCurso = async ({ params }, res) => {
  const { id } = params;
  const curso = await find_curso(id);
  response(res, 200, curso);
};

/*************************************************************************/
// CREAR UN nuevo Curso

export const createCurso = async ({ body }, res) => {
  const { name, description, price } = body;
  const obj = { name, description, price };
  const curso = await create_curso(obj);
  response(res, 201, curso);
};

/*************************************************************************/
// EDITAR UN Curso

export const editCurso = async ({ body, params }, res) => {
  const data = body;  
  const { id } = params;
  const curso = await edit_curso(data, id);
  response(res, 200, curso);
}

/*************************************************************************/
// ELIMINAR UN Curso por ID

export const deleteCurso = async ({ params }, res) => {
  const { id } = params;
  const curso = await delete_curso(id);
  response(res, 200, curso);
}