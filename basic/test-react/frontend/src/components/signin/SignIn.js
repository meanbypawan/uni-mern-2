import { useNavigate } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate();
    return <>
       <div className="d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh", border : "1px solid red"}}>
        <div className="d-flex" style={{width:"50%", height:"300px",border:"1px solid red"}}>
           <div style={{width:"50%", height:"300px"}}>
            <img src="ecommerceimg.avif" width="100%" height="300px"/>
           </div>
           <div className="d-flex flex-column p-4 justify-content-center align-items-center" style={{width:"50%", height:"300px"}}>
               <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter email id"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                  <button className="btn btn-secondary" style={{width:"100%"}}>Sign in</button>
                  <p className="text-right" style={{fontSize:"15px"}}><span> Forget password ?</span></p>
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