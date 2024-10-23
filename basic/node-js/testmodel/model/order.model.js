import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    personName:String,
    contactNumber: String,
    deliveryAddress: String,
    productTitle:String,
    billAmount:Number,
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    date:String
});

export const Order = mongoose.model("order",orderSchema);