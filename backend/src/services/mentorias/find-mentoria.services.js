import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js"; 

export const find_mentoria = async (id) => {
    const mentoriaId = await Mentorias.findById(id);
    if (!mentoriaId) throw new ClientError("Mentoria Not Found");
    
    return mentoriaId;
};