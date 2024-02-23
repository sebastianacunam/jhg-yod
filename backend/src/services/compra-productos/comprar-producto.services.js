import Usuario from "../../models/usuario.js";
import { ClientError } from "../../utils/errors/index.js";
import { comprar_anuncio } from "./comprarFunctions/comprar-anuncio.js";
import { comprar_bootcamp } from "./comprarFunctions/comprar-bootcamp.js";
import { comprar_curso } from "./comprarFunctions/comprar-curso.js";
import { comprar_mentoria } from "./comprarFunctions/comprar-mentoria.js";

export const comprar_producto = async (productId, type, usuarioId) => {

    const usuario = await Usuario.findById(usuarioId);
    let response;

    switch (type) {
        case "CURSO":
            response = await comprar_curso(productId, usuario);
            break;
    
        case "BOOTCAMP":
            response = await comprar_bootcamp(productId, usuario);
            break;
        
        case "MENTORIA":
            response = await comprar_mentoria(productId, usuario);
            break;
        
        case "ANUNCIO":
            response = await comprar_anuncio(productId, usuario);
            break;
        
        default:
            break;
    };
    if (!response) throw new ClientError("ERROR, Not Response", 400); 

    return response;
};

// export const comprar_curso = async (cursoId, usuarioId) => {
//     const curso = await Cursos.findById(cursoId).populate("_id");
//     const usuario = await Usuario.findById(usuarioId);

//     const cursoExistente = usuario.cursos.find(curso => curso.id.toString() === cursoId);

//     if (!usuario || !curso) throw new ClientError("Usuario o Curso no encontrado", 404);

//     if (!cursoExistente) {
//         usuario.cursos.push({
//             id: cursoId,
//             name: curso.name,
//             description: curso.description
//         });
//         await usuario.save();
//     } else {
//         throw new ClientError("El Usuario ya posee este Curso", 409);
//     }

//     return usuario;
// };