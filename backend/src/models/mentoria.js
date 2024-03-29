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
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: "MENTORIA"
    }
},
    {
        timestamps: true,
    }
);

const Mentorias = mongoose.model("Mentorias", mentoriasSchema);

export default Mentorias;