import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const edit_bootcamp = async (data, id) => {
    if (id.length === 24) {
        const bootcamp = await Bootcamp.findByIdAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (!bootcamp) {
            throw new ClientError("No existe el Bootcamp con ese ID", 404);
        } else {
            return {
                message: "Bootcamp Actualizado",
                dataUpdated: bootcamp
            };
        };
    };
};