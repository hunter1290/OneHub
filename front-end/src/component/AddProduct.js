import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const addProduct = async()=>{

          if(!name || !price || !category || !company)
          {
            setError(true);
            return false;
          }

      const userId = JSON.parse(localStorage.getItem('user'))._id;
      const result = await fetch("http://localhost:5000/add-product",{
          method:'post',
          body:JSON.stringify({
              name,
              price,
              category,
              company,
              userId
          }),
          headers:{
             "Content-Type" : "application/json"
          }
      });
    //  result = await result.JSON();
    console.log(result);
    navigate('/ProductList');

    }

  return (
    <Dv>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
     
      {error&& !name &&  <span>Enter the name</span>}
      <input
        type="text"
        placeholder="Enter the Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error&& !price &&  <span>Enter the price</span>}


      <input
        type="text"
        placeholder="Enter the category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error&& !category &&  <span>Enter the category</span>}


      <input
        type="text"
        placeholder="Enter the company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error&& !company &&  <span>Enter the company</span>}


      <button onClick={addProduct}>Add Product</button>
    </Dv>
  );
};

const Dv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  input {
    margin: 15px 0 15px 0;
    height: 5vh;
    width: 25vw;
    padding-left: 2%;
  }
  button {
    height: 5vh;
    width: 15vw;
  }

  span{
    margin-bottom:1%;
  }
  
`;

export default AddProduct;
