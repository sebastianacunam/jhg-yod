import mongoose from "mongoose";


const anuncioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required:true,
    },
    // country:{
    //     type: String,
    //     required: true,
    // },
    // city:{
    //     type: String,
    //     required: true,
    // },
    // picture:{
    //     type:String,
    //     required:true,
    // },
},
    {
        timestamps: true,
    }
);

const Anuncio = mongoose.model("Anuncio", anuncioSchema);
export default Anuncio;
