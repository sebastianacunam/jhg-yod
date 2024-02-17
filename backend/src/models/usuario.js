import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    image: {
        public_id: String,
        url: String,
    },
    github: {
        type: String,
        required: false,
        default: ""
    },
    linkedin: {
        type: String,
        required: false,
        default: ""
    },
    portfolio: {
        type: String,
        required: false,
        default: ""
    },
    admin: {
        type: Boolean,
        default: false,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
    },
    cursos: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Cursos',
            },
            name: String,
            description: String
        }
    ],
    anuncios: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Anuncio',
            },
            name: String, 
            description: String,
            price: Number
            },
    ]


},
    {
        timestamps: true,
    }
);

/*************************************************************************/
//Aqui se lee todo el modelo y se toma el password para hashearlo
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};
/*************************************************************************/


const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
