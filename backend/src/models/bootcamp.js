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
    type: {
        type: String,
        require: false,
        default: "BOOTCAMP"
    }
},
    {
        timestamps: true,
    }
);

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);
export default Bootcamp;
