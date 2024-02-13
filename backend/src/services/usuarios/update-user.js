import Usuario from "../../models/usuario";
import { uploadImage } from "../upload/uploadImage";

export const updateUser = async (userId, data) => {
  const imageUrl = await uploadImage(data.image.tempFilePath);

  const updatedUser = await Usuario.findByIdAndUpdate(
    userId,
    {
      ...data,
      image: {
        public_id: imageUrl.public_id,
        url: imageUrl.secure_url,
      },
    },
    {
      new: true,
    }
  );

  if (updatedUser) return updatedUser;
  throw new ClientError("Users not found", 404);
};
