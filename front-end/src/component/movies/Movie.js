import React from 'react'
import { useState,useEffect } from 'react'
import styled from "styled-components"
import Info from './Info';


function Main() {

    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState("Fun");
    const [count,setCount] = useState(0);
    
   
    useEffect(()=>{
        getMovies(query);  
      },[]);
   

     const getMovies = async(query)=>{
         const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=36f2a09a&`);
         const data = await response.json();
         setMovies(data.Search);
         setCount(data.totalResults);
         console.log(movies);
     }

 
   
     const updateSearch = e=>{

        setQuery(e.target.value); 
      
     } 

     const getSearch = e =>{
         e.preventDefault();
        getMovies(query);
     }

    const detail = async (title)=>{
         const dt = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=36f2a09a&`);
         const rs= await dt.json();
         console.log(rs);
    }

    return (
       <Container>
       
       
           <form onSubmit={getSearch}>
             <input style={{marginTop:"15%"}} value={query} onChange={updateSearch} />
             <button type='submit'>Search</button>            
             </form>
             <h1>{count}-results found</h1>
             <Cards>
                 {
                     movies.map(x=>(

                        <Outer>
                            <Content>
                          <img src={x.Poster} alt="Poster is not available" />
                          <h2>{x.Title}</h2>
                          <h3>{x.Year}</h3>
                          <h5>{x.Type}</h5>
                          <button onClick={detail(x.Title)}>Know More</button>
                        </Content>
                        </Outer>

                     ))
                 }
             </Cards>
              

             </Container>
    )
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  flex-wrap:wrap;
   form{
     display:flex;
     justify-content:center;
  align-items:center;
     flex-wrap:wrap;
      width:80%;
      gap:3%;
       input{
          
           height:3vh;
           width:58%;
           padding:1% 1%;
           border-radius:5px;
           font-size:16px;
           font-weight:700;
           
       }

       button{
            margin-top:15%;
            height:6vh;
            width:auto;
            border-radius:5px;
            font-weight:700;
            font-size:16px;
      color:darkgreen;
      background:lightblue;
 transition:0.4s ease-out;

      &:hover{
          background:yellow;
      }
  
       }
   }
`;
const Cards = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
 align-items:center;
 gap:5%;


`;
 const Outer = styled.div`
  margin-top:4%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 text-align:center;
  border:2px solid black;
  padding:12px 12px 12px 12px;
  background:lightyellow;
 
 `;
const Content = styled.div`
border:2px solid black;
 margin-top:4%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 text-align:center;
 opacity:65%;
 background:lightgreen;
 transition:0.6s ease-out;
  button{
      height:7vh;
      width:95%;
      font-size:26px;
      margin-bottom:4px;
      font-weight:600;
      color:darkgreen;
      background:lightblue;
 transition:0.4s ease-out;

      &:hover{
          background:yellow;
      }

      a{
          text-decoration:none;
          color:black;
      }
  }
  &:hover{
      background:cadetblue;
      transform:translate(5px,5px);
      opacity:95%;
      
  }
`;


export default Main
