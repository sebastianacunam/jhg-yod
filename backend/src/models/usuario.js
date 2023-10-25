import mongoose from "mongoose";


const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    imagen:{
        type: String,
        required:true,
    },
},
    {
        timestamps: true,
    }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
