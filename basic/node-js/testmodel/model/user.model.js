// user.model.js
// user(email,contact,age,gender) user-schema
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    age:Number,
    gender:String
});

//                                  singular ---> plural := users
export const User = mongoose.model("user",userSchema);
/*
  Mongoose model represent data in a application. With the
  help of schema we can define structure of document.

  Mongoose Model turn model into the model class and it also
  provide interface to interace with the database.

  User.create({}) ---> static
  User.find()
  -.....
  ......
*/









