import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/Api";
import { toast, ToastContainer } from "react-toastify";

function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [contact,setContact] = useState();
    const [age,setAge] = useState();
    const [gender,setGender] = useState();
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post(Api.sign_up,{name,email,contact,password,gender,age})
        .then(response=>{
            toast.success("Sign up successfully | Go To Sign-In Page");
        })
        .catch(err=>{
            toast.error("Oops! something went wrong | Try Again");
            console.log(err);
        });
    }
    return <>
       <ToastContainer/>
       <div className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh", }}>
        <div className="d-flex" style={{width:"50%", height:"400px", boxShadow: "10px 10px 10px grey"}}>
           <div style={{width:"50%", height:"300px"}}>
            <img src="ecommerceimg.avif" width="100%" height="400px"/>
           </div>
           <div className="d-flex flex-column p-4 justify-content-center align-items-center" style={{width:"50%", height:"400px"}}>
               <form onSubmit={handleSubmit}>
               <div className="form-group">
                    <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <input onChange={(event)=>setEmail(event.target.value)} type="text" className="form-control" placeholder="Enter email id"/>
                </div>
                <div className="form-group">
                    <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <input onChange={(event)=>setContact(event.target.value)} type="text" className="form-control" placeholder="Enter contact number"/>
                </div>
                <div className="form-group d-flex flex-row justify-content-around">
                   <input onChange={(event)=>setAge(event.target.value)} placeholder="Age" min="18" type="number" style={{width: "70px"}}/>
                   Male <input onChange={(event)=>setGender("Male")} type="radio" name="gender"/>
                   Female<input onChange={(event)=>setGender("Female")} type="radio" name="gender"/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Sign up</button>
                </div>
                <div className="form-group">
                    <button onClick={()=>navigate("/sign-in")} className="btn btn-outline-primary" style={{width:"100%"}}>Already have account ?</button>
                </div>
               </form>
           </div>
        </div>
       </div>
    </>
}

export default Signup;