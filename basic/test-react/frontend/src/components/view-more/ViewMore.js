import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../apis/Api";

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
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <Header />
        <div className="container mt-3">
            <div className="row" style={{ height: "400px", border: "1px solid black" }}>
                <div className="col-md-6" style={{ height: "400px", border: "1px solid red" }}>

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
                        </div>

                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>


                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    </>
}
export default ViewMore;