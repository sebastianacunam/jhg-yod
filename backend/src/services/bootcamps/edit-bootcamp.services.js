import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_bootcamp = async (data, id) => {
    const { name, description, price } = data;
    const bootcamp = await Bootcamp.findByIdAndUpdate({ _id: id },
        { name, description, price: parseInt(price) },
        { new: true });

    if (!bootcamp) {
        throw new ClientError("No existe el Bootcamp con ese ID", 404);
    }
    return { Message: "Bootcamp Actualizado", dataUpdated: bootcamp };
};