import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const create_bootcamp = async (obj) => {
    const { name, description } = obj;
    if (!name || !description) throw new ClientError("Missing Data", 400);

    const newBootcamp = new Bootcamp({
        name,
        description
    });
    const savedBootcamp = await newBootcamp.save();

    return savedBootcamp;
};