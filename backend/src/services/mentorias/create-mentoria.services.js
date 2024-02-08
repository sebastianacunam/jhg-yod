import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_mentoria = async (obj) => {
    const { name, description } = obj;
    if (!name || !description) throw new ClientError("Missing Data", 400);

    const newMentoria = new Mentorias({
        name: name,
        description: description
    });
    const savedMentoria = await newMentoria.save();

    return savedMentoria;
}