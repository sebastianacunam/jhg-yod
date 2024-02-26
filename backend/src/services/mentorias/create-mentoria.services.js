import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_mentoria = async (obj) => {
    const { name, description, price } = obj;
    if (!name || !description || !price) throw new ClientError("Missing Data", 400);

    const newMentoria = new Mentorias({
        name,
        description,
        price
    });
    const savedMentoria = await newMentoria.save();

    return savedMentoria;
}