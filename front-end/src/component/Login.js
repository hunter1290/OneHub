import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/");
    }
  },[]);


  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Person not Found");
    }
  };

  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Login Here</h1>
      <Container>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>Log In</button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    margin: 15px;
    width: 35vw;
    height: 5vh;
    padding: 15px 15px;
    font-weight: 700;
  }
   {
    button {
      width: 15vw;
      height: 5vh;
      background: #87cefa;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export default Login;
