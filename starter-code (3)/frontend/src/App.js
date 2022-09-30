import "./App.css";
import {Link , Routes , Route, Navigate} from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register";
import React , { useState, createContext } from "react";
import Dashboard from "./components/Dashboard";
import UserProducts from "./components/UserProducts";
import Search from "./components/Search";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct"
import ProductsTypes from "./components/ProductsTypes/index"
import Favorites from "./components/Favorites/Favorites"
import Navbar from "./components/Navbar/Navbar";
export const userContext=createContext()
function App() {
  let Token = JSON.parse(localStorage.getItem('Token'))
  let loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
  let user1 = JSON.parse(localStorage.getItem('user1'))

  const [loginemail , setLoginEmail]=useState("")
  const [loginpassword , setLoginPassword] = useState("")
  const [dashboardstatus , setDashboardStatus] = useState(true)
  const [isLoggedIn,setIsLoggedIn]=useState(loggedIn) 
  const [token , setToken] = useState(Token)
  const [user , setUser]=useState(user1)
  const [userProducts ,setUserProducts]=useState("")
  const [searchWord, setSearchWord] = useState("");
  const [searchProducts, setSearchProducts] = useState("");
  const [searchStatus,setSearchStatus]=useState(false)
  const [updateProduct,setUpdateProduct]=useState("")
  const [productType,setProductType] = useState("")
  const [products, setProducts] = useState("");
  

   

   return (
    <>
    <userContext.Provider value={{loginemail , setLoginEmail,loginpassword , setLoginPassword,dashboardstatus , setDashboardStatus,isLoggedIn,setIsLoggedIn,token , setToken,user , setUser,userProducts ,setUserProducts,searchProducts, setSearchProducts,searchWord, setSearchWord,searchStatus,setSearchStatus,updateProduct,setUpdateProduct,productType,setProductType ,products, setProducts}}>
    <div className="App">
<Navbar/>
      <Routes>
      <Route path ="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/userProducts" element={<UserProducts/>}/>
        <Route path= "/updateProduct" element={<UpdateProduct/>}/>
        <Route path="/productsTypes" element = {<ProductsTypes/>}/>
        <Route path="/favorite" element ={<Favorites/>}/>
    
      </Routes>
     
    </div>
    </userContext.Provider>

    </>
  );
}

export default App;
