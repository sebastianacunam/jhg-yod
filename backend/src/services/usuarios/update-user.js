import Usuario from "../../models/usuario.js";
import { uploadImage } from "../upload/uploadImage.js";
import { ClientError } from "../../utils/errors/index.js";

export const updateUser = async (userId, data) => {
  console.log(userId, data);
  // const imageUrl = await uploadImage(data.image.tempFilePath);
  const updatedUser = await Usuario.findByIdAndUpdate(
    userId,
    {
      name: data.name,
      email: data.email,
      image: {
        public_id: data.image.public_id,
        url: data.image.url,
      },
    },
    {
      new: true,
    }
  );

  if (updatedUser) return updatedUser;
  throw new ClientError("Users not found", 404);
};
