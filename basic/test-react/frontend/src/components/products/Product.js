function Product({productList,setProductList}){
    return <>
     <div className="container mt-3">
      <div className="row">
        {productList.map((product,index)=><div className="col-md-3 p-2" key={index}>
           <div className="d-flex flex-column align-items-center" style={{height:"auto",border: '1px solid black'}}>
            <img src={product.thumbnail} height="200px" width="100%"/>
           <p>{product.title}</p>
           <h4><span className="text-success">{product.price}</span> Rs.
           </h4>
           <button className="btn btn-outline-secondary mb-2" style={{width:"90%"}}>View more</button>
           </div>
        </div>)}
      </div>
     </div>
    </>
}

export default Product;