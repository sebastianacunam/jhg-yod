import { body } from 'express-validator';

export const validationRegisterBody = [
   body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .notEmpty()
      .normalizeEmail(),
   body("password", "La password debe tener al menos 6 caracteres").trim().isLength({ min: 6 }),
   body("name", "El nombre es requerido y debe tener al menos 3 caracteres").trim().notEmpty().isLength({ min: 3 }),
   body("name", "Ingresa un nombre valido").isString(),
];

export const validationLoginBody = [
   body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .notEmpty()
      .normalizeEmail(),
   body("password", "La password debe tener al menos 6 caracteres").trim().isLength({ min: 6 }),
];

export const validationOlvidePassword = [
   body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .notEmpty()
      .normalizeEmail(),
];

export const ValidationNuevaPassword = [
   body("password", "La password debe tener al menos 6 caracteres").trim().isLength({ min: 6 }),
]