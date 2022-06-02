import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
    console.log(result);
  };

  const deleteProduct = async (id)=>{
      let result = await fetch(`http://localhost:5000/product/${id}`,{
          method:"Delete"
      });
      result = await result.json();
      if(result)
      {
          getProducts();
      }
  }

  const searchHandle =async (event)=>{
     console.log(event.target.value);
     let key = event.target.value;
      if(key){
        let result =  await fetch(`http://localhost:5000/product/search/${key}`);
        result = await result.json();
   
        if(result)
        {
           setProducts(result);
        }
      }
    else{
       getProducts();
     }
    
  }

  return (
    <Major>
      <h2>Products You Added</h2>
      <input type="text" placeholder="Search Your Product here" onChange={searchHandle}  />
      <ul>
        <li>Serial No.</li>
        <li>Name of Product</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ?
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>₹ {item.price}</li>
            <li>{item.company}</li>
            <li>{item.category}</li>
            <li>
                <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                <Link to={`/UpdateProduct/${item._id}`}>Update</Link>
            </li>
          </ul>
        )):<h1>No Result Found</h1> }
    </Major>
  );
};
const Major = styled.div`
  text-align: center;
  margin-top: 50px;
   input{
     font-family:san-serif;
     text-align:center;
     margin-bottom:2%;
     height:4vh;
     width:40vw;
     font-size:22px;
     border:2px solid skyblue;

   }

  h2 {
    margin-bottom: 5%;
  }
  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-block;
      border: 1px solid skyblue;
      padding: 5px;
      width: 150px;
    }
  }
`;

export default ProductList;
