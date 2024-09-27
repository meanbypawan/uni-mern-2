import { Product } from "../model/product.model.js"

export const getProduct = (request,response,next)=>{
   Product.findOne({_id: request.params.id})
   .then(result=>{
    return result ? response.status(200).json({product: result}) : response.status(404).json({error: "Requested resource not found | Id not found"});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   });
}
export const fetchProducts = (request,response,next)=>{
    Product.find()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const saveInBulk = (request,response,next)=>{
    Product.insertMany(request.body)
    .then(result=>{
        return response.status(201).json({message: "All product saved.."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}