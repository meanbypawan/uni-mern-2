import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/Api";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-config/UserSlice";
import { toast, ToastContainer } from "react-toastify";

function SignIn(){
    const navigate = useNavigate();
    const emailInput = useRef(); 
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const handleSubmit = (event)=>{
        event.preventDefault();
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        axios.post(Api.sign_in,{email,password})
        .then(response=>{
          dispatch(setUser({user: response.data.user, token: response.data.token}));
          navigate("/");     
        }).catch(err=>{
          toast.error(err.response.data.error);
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
               <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input ref={emailInput} type="text" className="form-control" placeholder="Enter email id"/>
                </div>
                <div className="form-group">
                    <input ref={passwordInput} type="password" className="form-control" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Sign in</button>
                  <p className="text-right" style={{fontSize:"15px"}}><span onClick={()=>navigate("/forget-password")} style={{cursor: "pointer"}}> Forget password ?</span></p>
                </div>
                <div className="form-group">
                    <button onClick={()=>navigate("/sign-up")} className="btn btn-outline-primary" style={{width:"100%"}}>Create new account ?</button>
                </div>
               </form>
           </div>
        </div>
       </div>
    </>
}

export default SignIn;