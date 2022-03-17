import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  
  const [ products , setProducts] = useState([])
  useEffect(()=>{
    getProducts()
  }, [])
  async function getProducts(){
    const a = await fetch('http://localhost:7000/products')
    const b = await a.json()
    setProducts(b)
  }

  return (
    <>
      <div
        style={{
          // // display: "flex",
          // justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {products.map((el) => {
          return <Link to={`products/:${el.id}`} key={el.id}>
              <img style={{ width : "100px", height : "100px"}} src={el.image} alt="" />
              <p>{el.title}</p>
          </Link>
        })}
      </div>
    </>
  );
};
