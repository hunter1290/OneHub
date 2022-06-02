import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import Design from './Design';

function Contest() {
    const [value,setValue] = useState([]);
    const [query,setQuery] = useState("");

      const info = async()=>{
          const data =await fetch('https://kontests.net/api/v1/all');
          const res = await data.json();
          
          setValue(res);
      } 
      useEffect(()=>{
          info();
      })

    return (
       <>
        <Title>Register and look at latest Contests</Title>
         <Container>
           {
                 value.map(x=>(
                    <Design
                     name ={x.name}
                    url = {x.url}
                    startTime = {x.start_time}
                    endTime = {x.end_time}
                    duration = {x.duration}
                    site = {x.site}
                    in24Hour = {x.in_24_hours}
                    status = {x.status}
                    />
                 ))  
               
           }
       </Container>
       </>
    )
}
const Container = styled.div`
 display:flex;
 flex-wrap:wrap;
margin-top:2%;
 height:72vh;
 overflow-y:scroll;

`;

const Title = styled.div`
 text-align:center;
 margin:2% 0 0 0;
 font-size:34px;
 font-weight:900;
 color:white;
 background:black;
 padding:3% 0;
 border-radius:4px
`;

export default Contest
