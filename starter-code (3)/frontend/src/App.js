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
export const userContext=createContext()
function App() {

  const [loginemail , setLoginEmail]=useState("")
  const [loginpassword , setLoginPassword] = useState("")
  const [dashboardstatus , setDashboardStatus] = useState(true)
  const [isLoggedIn,setIsLoggedIn]=useState(false) 
  const [token , setToken] = useState("")
  const [user , setUser]=useState("")
  const [userProducts ,setUserProducts]=useState("")
  const [searchWord, setSearchWord] = useState("");
  const [searchProducts, setSearchProducts] = useState("");
  const [searchStatus,setSearchStatus]=useState(false)
  const [updateProduct,setUpdateProduct]=useState("")
  const [productType,setProductType] = useState("")

   return (
    <>
    <userContext.Provider value={{loginemail , setLoginEmail,loginpassword , setLoginPassword,dashboardstatus , setDashboardStatus,isLoggedIn,setIsLoggedIn,token , setToken,user , setUser,userProducts ,setUserProducts,searchProducts, setSearchProducts,searchWord, setSearchWord,searchStatus,setSearchStatus,updateProduct,setUpdateProduct,productType,setProductType}}>
    <div className="App">
     <h2>{!isLoggedIn && <Link to="/login" onClick={()=>{
      setDashboardStatus(false)
     }}>Login</Link>}</h2>
     <h2>{!isLoggedIn && <Link to="/register" onClick={()=>{
      setDashboardStatus(false)
     }}>Register</Link>}</h2>
     {isLoggedIn && <h2> Logout</h2>}
     { searchStatus && <Search/>}
     <h2><Link to="/dashboard" onClick={()=>{
      setSearchStatus(false)
      Navigate(Dashboard)
     }}>Dashboard</Link></h2>
     <h2><Link to="/favorite">Favorites</Link></h2>
      <Routes>
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
