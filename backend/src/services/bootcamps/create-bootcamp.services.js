import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_bootcamp = async (obj) => {
    const { name, description, price } = obj;
    if (!name || !description || !price) throw new ClientError("Missing Data", 400);

    const newBootcamp = new Bootcamp({
        name,
        description,
        price
    });
    const savedBootcamp = await newBootcamp.save();

    return savedBootcamp;
};