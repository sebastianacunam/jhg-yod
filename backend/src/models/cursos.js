import mongoose from "mongoose";


const cursosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required:true,
    }
},
    {
        timestamps: true,
    }
);

const Cursos = mongoose.model("Cursos", cursosSchema);
export default Cursos;
