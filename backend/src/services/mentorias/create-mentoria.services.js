import Mentorias from "../../models/mentoria.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_mentoria = async (obj) => {
    const { name, description, price } = obj;

    const newMentoria = new Mentorias({
        name,
        description,
        price: parseInt(price)
    });

    if (newMentoria) throw new ClientError("Error al crear la mentoria", 400);

    const savedMentoria = await newMentoria.save();

    return savedMentoria;
}