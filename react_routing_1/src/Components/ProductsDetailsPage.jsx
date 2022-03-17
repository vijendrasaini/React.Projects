import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams()

  const [ product , setProduct] = useState([])
  useEffect(()=>{
    getProduct()
  }, [])
  async function getProduct(){
    const a = await fetch(`http://localhost:7000/products/${id}`)
    const b = await a.json()
    setProduct(b)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={product.image} alt={product.title} style={{width:"200px" , height : "200px"}} />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.title}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
          <ul key={product.id}>
              <li key={""}>Category : { product.category}</li>
              <li key={""}>Description : {product.description}</li>
            </ul>
          
          </div>
        </div>
      </div>
    </>
  );
};
