import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../apis/Api";
import Rating from "../rating/Rating";

function ViewMore() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        loadProductById();
    }, []);
    const loadProductById = async () => {
        try {
            let response = await axios.get(Api.get_product_by_id + id);
            setProduct(response.data.product);
            console.log("Response.......");
            console.log(product);
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <Header />
        <div className="container mt-3">
            <div className="row" style={{ height: "400px", border: "1px solid black" }}>
                <div className="col-md-6" style={{ height: "400px"}}>

                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.thumbnail} alt="Los Angeles" width="100%" height="300px"/>
                            </div>
                            {product?.images?.map((imageUrl,index)=><div key={index} className="carousel-item">
                                <img src={imageUrl} alt="Los Angeles" width="100%" height="300px"/>
                            </div>)}                
                        </div>

                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon bg-danger"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon bg-danger"></span>
                        </a>
                    </div>
                    <div className="d-flex justify-content-around">
                      {product?.images?.map((imageUrl,index)=><img src={imageUrl} key={index} width="150px" height="100px"/>)} 
                    </div>

                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between p-2"> 
                   <h5>{product?.title} <span>[{product?.brand}]</span></h5> 
                   <h4><span className="text-success">{product?.price}</span> Rs.</h4>
                  </div>
                  <hr/>
                  <p>{product?.description}</p>
                  <p><strong>Warranty</strong> : {product?.warrantyInformation}</p>
                  <p><strong>Shipping Info</strong> : {product?.shippingInformation}</p>
                  <p><strong>Return Policy</strong> : {product?.returnPolicy}</p>
                  <p><strong>Rating : </strong> <Rating ratingValue={product?.rating}/>({product?.rating})</p>
                </div>
            </div>
        </div>
    </>
}
export default ViewMore;