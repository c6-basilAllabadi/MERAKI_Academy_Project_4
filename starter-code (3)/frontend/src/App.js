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
import FilterProducts from "./components/FilterProducts/FilterProducts";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import UserMoreInfo from "./components/UserMoreInfo/index"
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
  const [fliterType ,setFilterType]=useState("")
  const [filterPrice,setFilterprice]=useState("")
  const [filterStatus,setFilterStatus]=useState("")
  const [moreInfoProduct,setMoreInfoProduct] = useState("")
  const [favoritesProducts,setFavoriteProducts] = useState("")
  const [searchButtonStatus,setSearchButtonStatus] = useState(true)
  const [typeProducts,setTypeProducts] = useState("")
  const [filterCondition,setFilterCondition]=useState("")
  const [filterYear,setFilterYear]=useState("")
  const [filterCity,setFilterCity]=useState("")
  const [filterTransmition,setFilterTransmition]=useState("")
  const [filterFuel,setFilterFuel]=useState("")
  const [userNameMoreInfo,setUserNameMoreInfo]=useState("")
   

   return (
    <>
    <userContext.Provider value={{loginemail , setLoginEmail,loginpassword , setLoginPassword,dashboardstatus , setDashboardStatus,isLoggedIn,setIsLoggedIn,token , setToken,user , setUser,userProducts ,setUserProducts,searchProducts, setSearchProducts,searchWord, setSearchWord,searchStatus,setSearchStatus,updateProduct,setUpdateProduct,productType,setProductType ,products, setProducts,filterStatus,setFilterStatus,filterPrice,setFilterprice,fliterType ,setFilterType,moreInfoProduct,setMoreInfoProduct,favoritesProducts,setFavoriteProducts ,searchButtonStatus,setSearchButtonStatus,typeProducts,setTypeProducts,filterCondition,setFilterCondition,filterYear,setFilterYear,filterCity,setFilterCity,filterTransmition,setFilterTransmition,filterFuel,setFilterFuel,userNameMoreInfo,setUserNameMoreInfo}}>
    <div className="App">
<Navbar/>
      <Routes>
      <Route path ="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/userProducts" element={<UserProducts/>}/>
        <Route path= "/updateProduct" element={<UpdateProduct/>}/>
        <Route path="/productsTypes/" element = {<ProductsTypes/>}/>
        <Route path="/favorite" element ={<Favorites/>}/>
        <Route path="/search" element = {<Search/>}/>
        <Route path="/filterProducts" element ={<FilterProducts/>}/>
        <Route path = "/moreInfo" element= {<MoreInfo/>}/>
        <Route path="./userMoreInfo" element={<UserMoreInfo/>}/>
     
    
      </Routes>
     
    </div>
    </userContext.Provider>

    </>
  );
}

export default App;
