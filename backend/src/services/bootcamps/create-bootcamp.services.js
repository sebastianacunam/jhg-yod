import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_bootcamp = async (obj) => {
    const { name, description, price } = obj;


    const newBootcamp = new Bootcamp({
        name,
        description,
        price: parseInt(price)
    });

    if (!newBootcamp) {
        throw new ClientError("Error al crear el bootcamp", 400);
    };

    const savedBootcamp = await newBootcamp.save();

    return savedBootcamp;
};