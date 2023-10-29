import { generateId } from '../helpers/generateId.js';
import generateJWT from '../helpers/generateJWT.js';
import Usuario from '../models/usuario.js';



/*************************************************************************/
// Crear/registrar un usuario
export const createUser = async (req, res) => {    
    const {email} = req.body
    const userExists = await Usuario.findOne({email})
    if(userExists){
        const error = new Error('El correo que intentas utilizar, ya está registrado')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const user = new Usuario({
            ...req.body,
            image: { public_id: '', url: '' }        
        })
        user.token = generateId() //id hasheado
        const userAlmacenado = await user.save();
        res.status(201).json(userAlmacenado)

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

/*************************************************************************/
//Confirmar usuario
export const confirm = async (req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await Usuario.findOne({ token });
    
    if (!usuarioConfirmar) {
        const error = new Error("Token inválido");
        return res.status(403).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.confirmed = true;
        usuarioConfirmar.token = "";
        await usuarioConfirmar.save();
        res.json({ msg: "¡¡¡Usuario confirmado satisfactoriamente!!!" });

    } catch (error) {
        console.log(error)
    }
};

/*************************************************************************/
//Autenticar información del usuario al momento del login
//Para autenticar primero debemos confirmar al usuario
export const authenticate = async (req, res) => {
    const { email, password } = req.body

    //Comprobar si existe el usuario
    const usuario = await Usuario.findOne({email})
    if(!usuario){
        const error = new Error('El usuario no existe')
        return res.status(404).json({ msg: error.message })
    }

    //Comprobar si el usuario está confirmado
    if(!usuario.confirmed){
        const error = new Error('El usuario no está confirmado')
        return res.status(403).json({ msg: error.message })
    }

    //Comprobar su password, previamente hasheada en el modelo Usuario.js
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            name: usuario.name,
            email: usuario.email,
            image: usuario.image,
            token: generateJWT(usuario._id), //mandar el id por JWT
        })
    } else {
        const error = new Error("La contraseña es incorrecta");
        return res.status(403).json({ msg: error.message });
    }
}


/*************************************************************************/
//Traer todos los Usuarios Registrados
export const allUsers = async(req, res) => {
    try {
        // const body = req.body
        // const users = await Usuario.find({body})
        // res.send({data:users}).status(201)
        await Usuario.find({}).then((results) => {
            let userMapeado = results.map((el) => {
                return {
                    id: el.id,
                    name: el.name,
                    image: el.image,
                    password: el.password,
                    email: el.email,
                    token: el.token,
                };
            });
            return res.json(userMapeado);
        });
        
    } catch (error) {
        console.log(error)
    }
}

/*************************************************************************/
//Eliminar un usuario por ID
export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id
        const userId = await Usuario.findOneAndDelete({ _id: id})
        res.status(201).json({data: userId})
    } catch (error) {
        console.log(error)
    }
}

/*************************************************************************/
