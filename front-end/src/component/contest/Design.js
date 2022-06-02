import React from 'react'
import styled from 'styled-components'

function Design({name,url,startTime,endTime,duration,site,in24Hour,status}) {
    return (
        <Container>
            <h1>{name}</h1>
            <br />
             <h1>{site}</h1>
             <p>
                 start at = {startTime}
                 <br />
                 end at = {endTime}
                 <br />
                 duration = {duration}
             </p>
             occuring in 24hrs-{in24Hour}
             <br />
             {status}
             <br />
             <button> <a href={url} target='_blank'>Register</a></button>
        </Container>
    )
}

const Container = styled.div`
 margin:0;
 padding:0;
 border:2px solid black;
 width:20vw;
 margin:3% 4%;
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 text-align:center;
 border-radius:4px;
 box-shadow:4px 4px 4px black;
 transition:0.5s ease-in;
 &:hover{
     background:cadetblue;
     color:darkblack;
     transform:translate(3px,3px);
 }
     button
         {
     width:18vw;
     height:5vh;
     margin:3% 0;
     color:white;
     background:lightblue;
     a{
         text-decoration:none;
     }
    
 }

 @media (max-width:870px){
     width:auto;
 }

`;


export default Design
