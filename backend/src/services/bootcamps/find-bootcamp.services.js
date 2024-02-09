import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const find_bootcamp = async (id) => {
    const bootcampId = await Bootcamp.findById(id);
    if (!bootcampId) throw new ClientError("Bootcamp Not Found");

    return bootcampId;
};