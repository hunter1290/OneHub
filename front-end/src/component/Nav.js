import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <Container>



      {/* if there is some some data in auth then we see logout else signup   */}
      {
        auth ? <ul className='Nav_ul'>
          <li><Link to="/" style={{ textDecoration: "none", color: "black" }}>Home Page</Link></li>
          <li><Link to="/movies" style={{ textDecoration: "none", color: "black" }}>Movies</Link></li>
          <li><Link to="/books" style={{ textDecoration: "none", color: "black" }}>Books</Link></li>
          <li><Link to="/ProductList" style={{ textDecoration: "none", color: "black" }}>Products List</Link></li>
          <li><Link to="/AddProduct" style={{ textDecoration: "none", color: "black" }}>Add Product</Link></li>
          <li><Link to="/profile" style={{ textDecoration: "none", color: "black" }}>Profile</Link></li>
          <Link onClick={logout} to="/signup" style={{ textDecoration: "none", color: "black" }}>Logout({JSON.parse(auth).name})</Link> </ul> :


          <Major>
            <li><Link to="/signup" style={{ textDecoration: "none", color: "black" }}>SignUp</Link></li>
            <li><Link to="/login" style={{ textDecoration: "none", color: "black" }}>Login </Link></li>
          </Major>
      }





    </Container>
  )
}


const Container = styled.div`
  background:grey;
  font-size:18px;
  font-weight:700;

 
 

`;
const Major = styled.div`
 list-style:none;
 display:flex;
 justify-content:space-around;
 align-items:center;

  li{
      font-size:22px;
  }
`;

export default Nav;