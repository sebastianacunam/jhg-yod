import mongoose from "mongoose";


const bootcampSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: false,
        default: "BOOTCAMP"
    }
},
    {
        timestamps: true,
    }
);

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);
export default Bootcamp;
