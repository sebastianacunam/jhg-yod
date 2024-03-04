import { body } from "express-validator";

export const validateCreatePayment = [
   body("type", "El type es requerido").trim().notEmpty(),
   body("type", "Ingresá un type valido").isString(),
   body("price", "El precio es requerido").trim().notEmpty(),
   body("pm", "El pm es requerido").trim().notEmpty(),
   body("pm", "Ingresá un pm valido").isString(),
   body("description", "La descripcion es requerida").trim().notEmpty(),
   body("description", "Ingresá una descripcion valida").isString(),
];