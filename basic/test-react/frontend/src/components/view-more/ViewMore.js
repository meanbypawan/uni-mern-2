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
            <div className="row" style={{ height: "auto"}}>
                <div className="col-md-6 pb-2" style={{ height: "auto",boxShadow:"10px 10px 10px grey"}}>

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
                <div className="col-md-6 pb-2" style={{boxShadow:"10px 10px 10px grey"}}>
                  <div className="d-flex justify-content-between p-2"> 
                   <h5>{product?.title} <span>[{product?.brand}]</span></h5> 
                   <h4><span className="text-success"><del className="text-danger">{product?.price}</del></span> Rs.</h4>
                  </div>
                  <hr/>
                  <p>{product?.description}</p>
                  <p><strong>Warranty</strong> : {product?.warrantyInformation}</p>
                  <p><strong>Shipping Info</strong> : {product?.shippingInformation}</p>
                  <p><strong>Return Policy</strong> : {product?.returnPolicy}</p>
                  <p><strong>Rating : </strong> <Rating ratingValue={product?.rating}/>({product?.rating})</p>
                  <p><strong>Offer</strong> : {product?.discountPercentage} % <strong>Final price : </strong><span className="text-success" style={{fontSize:"25px",fontWeight:"bolder"}}>{(product?.price - (product?.price*product?.discountPercentage)/100).toFixed(2)} Rs.</span></p>
                  <button style={{width:"100%"}} className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
               {product?.reviews?.map((review,index)=><div className="col-12 border text-dark p-2" key={index}>
                    <div className="header d-flex justify-content-between">
                        <div className="name-email d-flex" style={{columnGap:"10px"}}>
                            <span>{review?.reviewerName}</span>
                            <span>{review?.reviewerEmail} <b>Rating : </b><strong className="text-primary">{review?.rating}/5</strong></span>
                        </div>
                        <span>{review?.date}</span>
                    </div>
                    <p>{review.comment}</p>
                </div>)} 
                
            </div>
        </div>
    </>
}
export default ViewMore;