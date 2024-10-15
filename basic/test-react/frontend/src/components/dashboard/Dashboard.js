import { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import Product from "../products/Product";

function DashBoard(){
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        loadProducts();
    },[]);
    const loadProducts = async()=>{
        try{
         let response = await  axios.get("http://localhost:3000/product/list");
         setProductList(response.data.products);
        }
        catch(err){
           console.log(err);
           // you can navigate at error component...
        }
    }
    return <>
      <Header/>
      <Product productList={productList} setProductList={setProductList}/>
    </>
}

export default DashBoard;