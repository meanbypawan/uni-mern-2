// user.model.js
// user(email,contact,age,gender) user-schema
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        set: (v)=>{
          let saltKey =  bcrypt.genSaltSync(10);
          let encryptedPassword = bcrypt.hashSync(v,saltKey);
          return encryptedPassword;
        }
    },
    contact:{
        type: String,
        required: true,
        set: (v)=>{
            return "+91"+v;
        }
    },
    age:Number,
    gender:String
},{versionKey: false},{ toJSON: { getters: true } });

export const User = mongoose.model("user",userSchema);

User.checkPassword = (password,encryptedPassword)=>{
    return bcrypt.compareSync(password,encryptedPassword);
}








