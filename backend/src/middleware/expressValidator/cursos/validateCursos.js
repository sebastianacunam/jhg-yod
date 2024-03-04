import { body } from "express-validator";

export const validateCreateCurso = [
   body("name", "El nombre es requerido").trim().notEmpty(),
   body("name", "Ingresá un nombre valido").isString(),
   body("description", "La descripcion es requerida").trim().notEmpty(),
   body("description", "Ingresá una descripcion valida").isString(),
   body("price", "El precio es requerido").trim().notEmpty(),
];

export const validateEditCurso = [
   body("name", "Ingresa un nombre valido").optional().isString(),
   body("description", "Ingresa una descripcion valida").optional().isString(),
];
