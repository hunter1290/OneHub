import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Design from './Design';

function Joke() {
  
    const [laugh,setLaugh] = useState([]);
    const [head,setHead] = useState("Have a joke");
    const [btn,setBtn] = useState("Press ME");



    const getJokes = async()=>{
        const data = await fetch("https://icanhazdadjoke.com/slack");
        const res = await data.json();
        console.log(res);
        setLaugh(res.attachments);
        setHead("");
        setBtn("want 1 more..😂");
    }
 
    
    return (
       <Container>
           {head}        
 
           {  
               laugh.map(x=>(
                   <Design
                    fallback = {x.fallback}
                   />
               ))
           }
            <Button onClick={getJokes}>{btn}</Button>
          
       </Container>
    )
}

const Container = styled.div`
width:auto;
height:auto
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:22px;
font-weight:600;
text-align:center;
align-items:center;
margin:5% 0%;
padding:0% 0% 2% 0%;


`;

const Button = styled.button`
  border:none;
  outline:hidden;
  background:none;
  border-radius:50%;
  margin-left:3px;
  padding:3% 4%;
  font-size: 22px;
  transition:0.6s ease-in;
  &:hover{
      background-color:yellow;
  }
`;

export default Joke
