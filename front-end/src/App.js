import React from 'react'
import './App.css'
import Nav from './component/Nav'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Footer from './component/Footer'
import SignUp from './component/SignUp'
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login'
import AddProduct from './component/AddProduct'
import ProductList from './component/ProductList'
import UpdateProduct from './component/UpdateProduct'
import Main from './component/movies/Movie'
import Homepage from './component/HomePage'


function App() {
  return (
    < BrowserRouter>
      <Nav />
      <Routes>
        <Route element = {<PrivateComponent/>}>

       <Route path="/" element={<Homepage/>}/>
       <Route path="/movies" element={<Main/>}/>
       <Route path="/books" element={<h1>books</h1>}/>
       <Route path="/ProductList" element={<ProductList/>}/>
       <Route path="/AddProduct" element={<AddProduct/>}/>
       <Route path="/UpdateProduct/:id" element={<UpdateProduct/>}/>

       <Route path="/profile" element={<h1>Profile</h1>}/>
       <Route path="/logout" element={<h1>logout</h1>}/>
       
       </Route>

       <Route path="/signup" element={<SignUp/>}/> 
       <Route path = "/login" element = {<Login/>} />      
      </Routes>
      {/* <Footer/> */} 
    </ BrowserRouter>
  )
}

export default App