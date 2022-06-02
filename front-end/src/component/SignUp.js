import React, { useEffect, useState } from 'react'
// import { json } from 'stream/consumers';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
    //manging that if user is login then we dont want to route at signup page
  })

  const collectData = async () => {
    console.warn(name, email, password, confirmPassword);



    const result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, confirmPassword }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();

    console.log(result.json());
    localStorage.setItem("user", JSON.stringify(result.result));//storing login credential in local storage
    localStorage.setItem("token", JSON.stringify(result.auth));


    if (result) {
      navigate('/');
    }
    else {
      result.status('400').send('Something wrong');
    }

  }


  return (
    <Container>
      <h1>Register here</h1>
      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder='Confirm Your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="button" onClick={collectData}>Sign Up</button>
    </Container>

  )
}

const Container = styled.div`
  margin:15px ;
  
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;



  input{
   margin:15px;
   width:35vw;
   height:5vh;
   padding:15px 15px;
   font-weight:700;
   
  }
  {
      button{
       width:15vw;
       height:5vh;
       background:#87CEFA;
    font-weight:700;
    cursor:pointer
       
      }
  }
`;

export default SignUp