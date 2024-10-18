import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../App";

function Header() {
    let {categoryList} = useContext(CategoryContext);
    const navigate = useNavigate();
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">Frontend</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" >About us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{zIndex:"99"}}>
                            {categoryList.map((category,index)=><a className="dropdown-item" href="#" key={index}>{category.name}</a>)}
                            <div className="dropdown-divider"></div>
                        </div>
                    </li>
                    <li className="nav-item">
                      <button onClick={()=>navigate("/sign-in")} className="sign-in-button btn" style={{border:"1px solid white"}}>Sign In</button>
                      <button className="ml-2 bg-light btn text-dark" style={{border:"1px solid white"}}>Create account ?</button>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
}

export default Header;