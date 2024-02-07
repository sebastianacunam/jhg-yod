import {
  //usuarios
  // GOOGLE_LOGIN,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  RESET_ERROR_LOGUIN_USER,
  VALIDATE_USER,
  SEND_EMAIL_TO_RESET_PASSWORD,
  RESET_PASSWORD,
  RESET_ERROR,
  IS_ADMIN,
  UPDATE_NOMBRE,
  BORRAR_USUARIO,
  ACTUAL,
  //cursos
  GET_CURSOS,
  //mentorias
  GET_MENTORIAS,
  POST_MENTORIAS,
} from "../utils/constants";

const initialState = {
  usuario: [],
  email: [],
  loginUser: false,
  usuarioActual: [],
  allUsuarios: [],
  confirmacion: {},
  invalidToken: true,
  isAdmin: false,
  updateNombre: [],
  borraUsuario: [],
  cursos: [],
  allCursos: [],
  allMentorias: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //---------------------USER----------------------------------------
    // case GOOGLE_LOGIN:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     usuario: action.payload,
    //   }

    case LOGIN_USER:
      return {
        ...state,
        usuario: !action.payload.error ? action.payload : null,
        email: action.payload.error ? action.payload.error : null,
        loginUser: action.payload._id && true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        usuario: [],
        usuarioActual: [],
        allUsuarios: [],
        confirmacion: {},
        email: [],
        invalidToken: true,
        loginUser: false,
      };

    case AUTH_USER:
      return {
        ...state,
        usuario: action.payload,
      };

    case RESET_ERROR_LOGUIN_USER:
      return {
        ...state,
        email: action.payload,
      };

    case VALIDATE_USER:
      return {
        ...state,
        confirmacion: action.payload,
      };

    case SEND_EMAIL_TO_RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };

    case RESET_ERROR:
      return {
        ...state,
        email: [],
      };

    case IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };
    case UPDATE_NOMBRE:
      return {
        ...state,
        updateNombre: action.payload,
      };
    case BORRAR_USUARIO:
      return {
        ...state,
        borraUsuario: action.payload,
      };
    case ACTUAL:
      return {
        ...state,
        usuarioActual: action.payload,
      };
    //---------------------CURSOS----------------------------------------
    case GET_CURSOS:
      return {
        ...state,
        cursos: action.payload,
        allCursos: action.payload,
      };
    //---------------------MENTORIAS----------------------------------------
    case GET_MENTORIAS:
      return {
        ...state,
        mentorias: action.payload,
        allMentorias: action.payload,
      };
    case POST_MENTORIAS:
      return {
        ...state,
        name: !action.payload.error ? action.payload : null,
        description: action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}

export default rootReducer;
