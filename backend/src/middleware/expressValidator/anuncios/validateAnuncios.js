import { body } from "express-validator";

export const validateCreateAnuncio = [
   body("name", "El name es requerido").trim().notEmpty(),
   body("name", "Ingresá un name valido").isString(),
   body("description", "La descripción es requerida").trim().notEmpty(),
   body("description", "Ingresá una descripción valida").isString(),
   body("price", "El precio es requerido").trim().notEmpty(),
   body("category", "La categoria es requerida").trim().notEmpty(),
   body("category", "Ingresá una categoria valida").isString(),
   body("deliver_time", "El deliver_time es requerido").trim().notEmpty(),
   body("deliver_time", "Ingresá un deliver_time requerido").isString(),
   body("location", "La locación es requerida").trim().notEmpty(),
   body("location", "Ingresá una locación valida").isString(),
];

export const validateEditAnuncio = [
   body("name", "Ingresá un name valido").optional().isString(),
   body("description", "Ingresá una descripción valida").optional().isString(),
   body("category", "Ingresá una categoria valida").optional().isString(),
   body("deliver_time", "Ingresá un deliver_time requerido").optional().isString(),
   body("location", "Ingresá una locación valida").optional().isString(),
];