import React,{ useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
//use for taking id from url

const UpdateProduct = ()=>{

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[]);

   const getProductDetails = async ()=>{
        console.log(params);
         let result = await fetch(`http://localhost:5000/product/${params.id}`);
          result = await result.json();
        //   console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
        }



    const updateProduct = async() =>{
        // console.log("Random");
    
       let result = await fetch(`http://localhost:5000/product/${params.id}`,{
           method:'Put',
           body:JSON.stringify({
               name,price,category,company
           }),
           headers:{
               'Content-Type':"application/json"
           }
       });

       result = await result.json();
       navigate('/');

    }



    return(
        <div>
            <Dv>
            <h1>update</h1>

            <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
     

      <input
        type="text"
        placeholder="Enter the Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />


      <input
        type="text"
        placeholder="Enter the category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
  


      <input
        type="text"
        placeholder="Enter the company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
   


      <button onClick={updateProduct}>Apply Updates</button>
    </Dv>
        </div>
    )
}

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

export default UpdateProduct;