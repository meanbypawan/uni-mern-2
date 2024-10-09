import { Link } from "react-router-dom";

function Header(){
    return <>
      <div className="bg-danger d-flex justify-content-around align-items-center text-white" style={{height: "50px"}}>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About us</span></Link>
        <Link to="/contact"><span>Contact us</span></Link>
        <Link to="/gallery"><span>Gallery</span></Link>
        <Link to="/sign-in"><span>Sign-in</span></Link>
      </div>
    </>
}
export default Header;