import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const delete_bootcamp = async (id) => {
    const bootcampId = await Bootcamp.findOneAndDelete({ _id: id });
    if (!bootcampId) throw new ClientError("Bootcamp Not Found", 404);

    return {
        message: "Bootcamp Eliminado",
        dataDeleted: bootcampId
    };
};