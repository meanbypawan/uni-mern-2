import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({children}){
    // children = <PlaceOrder>
    const {isLoggedIn} = useSelector((store)=>store.user);
    if(isLoggedIn)
        return children;
    return <Navigate to="/sign-in"/>
}

export default Auth;

/*
  <div>
    <p>Hello....</p>
    
  </div>

  <DashBoard> props: {children}
    <Header></Header>
  </DashBoard>
  Header is the children of DashBoard
  <p> tag is the children of div
*/