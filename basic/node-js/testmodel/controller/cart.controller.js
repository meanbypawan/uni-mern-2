import { Cart } from "../model/cart.model.js";
export const removeFromCart = (request,response,next)=>{
  let {userId, productId} = request.body;
  Cart.updateOne({userId},{$pull:{cartItems:{productId}}})
  .then(result=>{
    return result.modifiedCount ? response.status(200).json({message: "Item removed from cart"}) : response.status(404).json({
      error :"Requested resouce not available | Product Id Not Found"
    });
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal Server Error.."});
  })
}
export const fetchCart = (request,response,next)=>{
    Cart.findOne({userId: request.params.userId}).populate("cartItems.productId")
    .then(result=>{
        return response.status(200).json({"cart-details": result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const addToCart = async (request,response,next)=>{
    let {userId, productId} = request.body;
    try{
    let cart = await  Cart.findOne({userId});
    // cart : {userId: "",cartItems: [{},{},{}]}
    if(cart){
      // User second time performing add to cart
      let cartItems = cart.cartItems;
      // check if product already exist.
      let index = cartItems.findIndex((product)=>{return product.productId == productId});
      if(index == -1){
        cart.cartItems.push({productId});
        await cart.save();
        return response.status(201).json({message: "Item successfully added into cart"});
      }
      return response.status(200).json({message: "Item already added into cart"});
    }
    else{
      // user first time performing add to cart  
      await Cart.create({userId, cartItems:[{productId}]});
      return response.status(201).json({message: "Item saved in cart"});
    }   
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}