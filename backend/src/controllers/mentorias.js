import { all_mentorias } from "../services/mentorias/all-mentorias.services.js";
import { create_mentoria } from "../services/mentorias/create-mentoria.services.js";
import { delete_mentoria } from "../services/mentorias/delete-mentoria.services.js";
import { edit_mentoria } from "../services/mentorias/edit-mentoria.services.js";
import { find_mentoria } from "../services/mentorias/find-mentoria.services.js";
import { response } from "../utils/response.js";

/*************************************************************************/
// TRAER TODAS las Mentorias

export const getMentorias = async (req, res) => {
    const mentorias = await all_mentorias();
    response(res, 200, mentorias);
};

/*************************************************************************/
// TRAER UNA Mentoria por ID

export const findMentoria = async ({ params }, res) => {
    const { id } = params;
    const mentoria = await find_mentoria(id);
    response(res, 200, mentoria);
};

/*************************************************************************/
// CREAR UNA nueva Mentoria

export const createMentoria = async ({ body }, res) => {
    const { name, description, price } = body;
    const obj = { name, description, price };
    const mentoria = await create_mentoria(obj);
    response(res, 201, mentoria);
};

/*************************************************************************/
// EDITAR UNA Mentoria

export const editMentoria = async ({ body, params }, res) => {
    const data = body;
    const { id } = params;
    const mentoria = await edit_mentoria(data, id);
    response(res, 200, mentoria);
};

/*************************************************************************/
// ELIMINAR UNA Mentoria por ID

export const deleteMentoria = async ({ params }, res) => {
    const { id } = params;
    const mentoria = await delete_mentoria(id);
    response(res, 200, mentoria);
};