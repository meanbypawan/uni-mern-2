import axios from "axios";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Api from "../../apis/Api";
import { toast, ToastContainer } from "react-toastify";

function CreateNewPassword(){
    const [params] = useSearchParams();
    const [password, setPassword] = useState();
    const location = useLocation();
    let queryParameters = new URLSearchParams(location.search);
    const createNewPassword = (event)=>{
      event.preventDefault();
      let email = queryParameters.get("email");
      console.log(email);
      axios.post(Api.create_new_password,{email,password})
      .then(response=>{
        toast.success("Password updated | please sign-in again");
      }).catch(err=>{
        toast.error("Oops! something went wrong | please try after sometimes");
      })
    }
    return <>
       <ToastContainer/>
       <div className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh", border : "1px solid red"}}>
        <div className="d-flex" style={{width:"50%", height:"300px",border:"1px solid red"}}>
           <div style={{width:"50%", height:"300px"}}>
            <img src="ecommerceimg.avif" width="100%" height="300px"/>
           </div>
           <div className="d-flex flex-column p-4 justify-content-center align-items-center" style={{width:"50%", height:"300px"}}>
               <form onSubmit={createNewPassword}> 
                <div className="form-group">
                    <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" placeholder="Enter new password"/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
                </div>
               </form> 
           </div>
        </div>
       </div>
    </>
}

export default CreateNewPassword;