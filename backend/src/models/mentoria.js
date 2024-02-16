import mongoose from "mongoose";

const mentoriasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        require: false,
        default: "MENTORIA"
    }
},
    {
        timestamps: true,
    }
);

const Mentorias = mongoose.model("Mentorias", mentoriasSchema);

export default Mentorias;