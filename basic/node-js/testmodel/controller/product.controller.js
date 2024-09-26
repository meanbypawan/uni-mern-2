import { Product } from "../model/product.model.js"

export const saveInBulk = (request,response,next)=>{
    Product.insertMany(request.body)
    .then(result=>{
        return response.status(201).json({message: "All product saved.."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}