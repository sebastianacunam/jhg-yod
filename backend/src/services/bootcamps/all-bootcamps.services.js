import Bootcamp from "../../models/bootcamp.js";
import { ClientError } from "../../utils/errors/index.js";

export const all_bootcamps = async () => {
    const bootcamps = await Bootcamp.find();
    if (!bootcamps.length) throw new ClientError("Bootcamps not found", 404);

    return bootcamps;
};