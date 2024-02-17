import mongoose from "mongoose";


const anuncioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number, 
        required: true,
    },
    description:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required: true,
    },
    deliver_time:{
        type: String,
        required: false,
    },
    location:{
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
        default: "ANUNCIO"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},
    {
        timestamps: true,
    }
);

const Anuncio = mongoose.model("Anuncio", anuncioSchema);
export default Anuncio;
