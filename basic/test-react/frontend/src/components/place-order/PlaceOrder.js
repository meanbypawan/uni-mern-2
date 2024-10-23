import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import { useState } from "react";
import axios from "axios";
import Api from "../../apis/Api";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function PlaceOrder(){
    const {token,user} = useSelector((store)=>store.user);
    const location = useLocation();
    const product = location.state.params;
    const [personName,setPersonName] = useState();
    const [contactNumber,setContactNumber] = useState();
    const [deliveryAddress,setDeliveryAddress] = useState();
    const handleSubmit = (event)=>{
      event.preventDefault();
      axios.post(Api.place_order,{
        personName,
        contactNumber,
        deliveryAddress,
        billAmount: product.price,
        productTitle: product.title,
        productId: product._id
      }).then(response=>{
          toast.success(response.data.message);
      }).catch(err=>{
        console.log(err);
        toast.error("Oops! something went wrong..");
      });
    }
    return <>
      <ToastContainer/>
      <Header/>
      <div className="container mt-2" style={{width:"100%",height:"500px"}}>
        <p className="mt-4">Enter Order Details</p>
        <hr/>
        <form onSubmit={handleSubmit}>
          <p className="bg-dark p-1 d-flex justify-content-between" style={{height:"50px"}}>
             <span className="text-white ml-2 d-flex justify-content-center align-items-center"><label className="text-light" style={{fontSize:"20px",fontWeight:"bold"}}>{product?.title}</label></span>
             <span className="text-success mr-2">Bill amount : {product?.price}</span>
          </p>
          <div className="form-group">
            <input defaultValue={user.name} onChange={(event)=>setPersonName(event.target.value)} type="text" placeholder="Enter contact person name" className="form-control"/>
          </div>
          <div className="form-group">
            <input defaultValue={user.contact} onChange={(event)=>setContactNumber(event.target.value)} type="text" placeholder="Enter contact number" className="form-control"/>
          </div>
          <div className="form-group">
            <input onChange={(event)=>setDeliveryAddress(event.target.value)} type="text" placeholder="Enter delivery address" className="form-control"/>
          </div>
          <div className="form-group">
            <small className="text-primary">Payment: COD(Cash on delivery)</small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning">Place order</button>
          </div>
        </form>
      </div>
    </>
}
export default PlaceOrder;