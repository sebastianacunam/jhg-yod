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
    }
},
    {
        timestamps: true,
    }
);

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);
export default Bootcamp;
