import Curso from "../models/cursos.js"
import Usuario from "../models/usuario.js";
import { all_cursos } from "../services/cursos/all-cursos.services.js";
import { comprar_curso } from "../services/cursos/comprar-curso.services.js";
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
  const { name, description } = body;
  const obj = { name, description };
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

/*************************************************************************/
// Relación entre el Curso y el Usuario que lo Solicita/Compra. 

export const comprarCurso = async (req, res) => {
  const cursoId = req.params.id;
  const usuarioId = req.usuario._id
  const usuario = await comprar_curso(cursoId, usuarioId);
  response(res, 201, usuario);
  /*try {
      const usuario = await Usuario.findById(usuarioId)
      const curso = await Curso.findById(cursoId).populate("_id")
      
      const cursoExistente = usuario.cursos.find(c => c.id.toString() === cursoId);

      if (!usuario || !curso) return res.status(404).json({ msg: 'Usuario o curso no encontrado' });

      if (!cursoExistente) {
        usuario.cursos.push({
            id: cursoId,
            name: curso.name,
            description: curso.description
        });
        await usuario.save();
      }else{
        return res.status(409).json({msg:"Ya posees este curso"})
      }

      res.json({ msg: 'Curso comprado exitosamente', usuario: usuario });
  } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al comprar el curso' });
  }*/
};