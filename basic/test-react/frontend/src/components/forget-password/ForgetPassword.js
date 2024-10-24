import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Api from "../../apis/Api";
import { toast, ToastContainer } from "react-toastify";

function ForgetPassword(){
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const recoverPassword =  (event)=>{
      event.preventDefault();
      axios.post(Api.forget_password,{email})
      .then(response=>{
        toast.success("Please check your email for creating new password");
      }).catch(err=>{
        toast.error("Oops! something went wrong or contact to customer care");
      });
    }
    return <>
       <ToastContainer/>
       <div className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh", border : "1px solid red"}}>
        <div className="d-flex" style={{width:"50%", height:"300px",border:"1px solid red"}}>
           <div style={{width:"50%", height:"300px"}}>
            <img src="ecommerceimg.avif" width="100%" height="300px"/>
           </div>
           <div className="d-flex flex-column p-4 justify-content-center align-items-center" style={{width:"50%", height:"300px"}}>
               <form onSubmit={recoverPassword}> 
                <div className="form-group">
                    <input onChange={(event)=>setEmail(event.target.value)} type="text" className="form-control" placeholder="Enter email id"/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Recover password</button>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-primary" style={{width:"100%"}}>Create new account ?</button>
                </div>
               </form> 
           </div>
        </div>
       </div>
    </>
}

export default ForgetPassword;