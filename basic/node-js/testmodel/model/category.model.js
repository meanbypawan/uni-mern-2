import mongoose  from "mongoose";
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    slug:{
        type: String,
        trim: true
    },
    url:String
});

export const Category = mongoose.model("category",categorySchema);