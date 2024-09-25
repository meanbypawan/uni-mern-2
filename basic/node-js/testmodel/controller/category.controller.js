import { Category } from "../model/category.model.js"
export const deletCategory = (request,response,next)=>{
    let id = request.params.id;
    Category.deleteOne({_id: id})
    .then(result=>{
        if(result.deletedCount)
            return response.status(200).json({message: "Category removed"});
        return response.status(404).json({error: "Requested resource not available | Id Not Found"});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
    });
}
export const save = (request,response,next)=>{
    Category.create(request.body)
    .then(result=>{
        return response.status(201).json({message: "Category saved"});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
    });
}
export const fetchCategory = (request,response,next)=>{
   Category.find()
   .then(result=>{
      return response.status(200).json({categories: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   })
}
export const saveInBulk = (request,response,next)=>{
    Category.insertMany(request.body)
    .then(result=>{
        return response.status(201).json({message: "All categories saved"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}