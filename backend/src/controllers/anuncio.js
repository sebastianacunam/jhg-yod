import { all_anuncios } from "../services/anuncios/all-anuncios.services.js";
import { create_anuncio } from "../services/anuncios/create-anuncio.services.js";
import { delete_anuncio } from "../services/anuncios/delete-anuncio.services.js";
import { edit_anuncio } from "../services/anuncios/edit-anuncio.services.js";
import { find_anuncio } from "../services/anuncios/find-anuncio.services.js";
import { all_anuncios_by_user } from "../services/anuncios/all_anuncios_by_user.services.js";

import { response } from "../utils/response.js";

/*************************************************************************/
//TRAER TODOS los Anuncios

export const getAnuncios = async (req, res) => {
  const anuncios = await all_anuncios();
  response(res, 200, anuncios);
};

/*************************************************************************/
//TRAER TODOS los Anuncios DE UN USUARIO POR ID 

export const getAnunciosByUser = async (req, res) => {
  const idOwner = req.usuario._id
  const anunciosByUser = await all_anuncios_by_user(idOwner)
  response(res, 200, anunciosByUser);
};


/*************************************************************************/
// TRAER UN Anuncio por ID

export const findAnuncio = async ({ params }, res) => {
  const { id } = params;
  const anuncio = await find_anuncio(id);
  response(res, 200, anuncio);
}

/*************************************************************************/
// CREAR UN nuevo Anuncio

export const createAnuncio = async (req, res) => {
  const idOwner = req.id;
  const anuncio = await create_anuncio(req.body, idOwner);
  response(res, 201, anuncio);
};

/*************************************************************************/
// EDITAR UN Anuncio

export const editAnuncio = async ({ body, params }, res) => {
  const data = body;
  const { id } = params;
  const anuncio = await edit_anuncio(data, id);
  response(res, 200, anuncio);
};

/*************************************************************************/
// ELIMINAR UN Anuncio por ID

export const deleteAnuncio = async (req, res) => {
  const { id } = req.params;
  const idOwner = req.usuario._id
  const anuncio = await delete_anuncio(id, idOwner);
  response(res, 200, anuncio);
};



