import React from "react";
import Contest from "./contest/Contest";
import Footer from "./Footer";
import Joke from "./joke/Joke";

const Homepage = ()=>{
     return(
        <>
         <Joke/>
         <Contest/>
         <Footer/>
        </>
      
          

     )
}

export default Homepage;