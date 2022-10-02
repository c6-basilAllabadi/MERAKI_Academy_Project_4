
import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";
import "./style.css"
import ProductsTypes from "../ProductsTypes/index.js";



const Navbar=()=>{
    const userContext1 = useContext(userContext)
    const navigate = useNavigate()
    let setDashboardStatus = userContext1.setDashboardStatus
    let setSearchStatus = userContext1.setSearchStatus
    let setToken = userContext1.setToken
    let setIsLoggedIn = userContext1.setIsLoggedIn
    let isLoggedIn = userContext1.isLoggedIn
    let searchStatus = userContext1.searchStatus
    let setProductType = userContext1.setProductType
    let setSearchWord = userContext1.setSearchWord
let setProducts = userContext1.setProducts
let productType = userContext1.productType
let setFilterprice=userContext1.setFilterprice
let setFilterStatus = userContext1.setFilterStatus
let setFilterType = userContext1.setFilterType
let filterPrice = userContext1.filterPrice
let filterStatus = userContext1.filterStatus
let fliterType=userContext1.fliterType


    return(

        <>
        <div className="navbar_container">
           <p className="navbar_login">{!isLoggedIn && <Link to="/login" onClick={()=>{
      setDashboardStatus(false)
     }}>Login</Link>}</p>
     <p className="navbar_register">{!isLoggedIn && <Link to="/register" onClick={()=>{
      setDashboardStatus(false)
     }}>Register</Link>}</p>
    
     
     <p className="navbar_dashboard"><Link to="/dashboard" onClick={()=>{
     
      Navigate(Dashboard)
     }}>Dashboard</Link></p>
     <p className="navbar_favorite"><Link to="/favorite">Favorites</Link></p>
     {isLoggedIn &&<button className="navbar_logout"onClick={()=>{
      setToken(null)
      setIsLoggedIn(false)
  
      localStorage.setItem("Token", JSON.stringify(null))
      localStorage.setItem("loggedIn",JSON.stringify(false))
      localStorage.setItem("user1",JSON.stringify(""))

     }}>Logout</button>}
   
    <p className= "car_productType" onClick={()=>{
   
      setProductType("car")
      navigate("/productsTypes")
   
    }}>Cars</p>
    <p className= "laptop_productType" onClick={()=>{
    
      setProductType("pickup")
      navigate("/productsTypes")
    }}>Pickups</p>
    <p className= "mobile_productType" onClick={()=>{
     
      setProductType("bus")
      navigate("/productsTypes")
    }}>Buses</p>
      <input className="search_dashboard"
        placeholder="Search"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      ></input>
      <button className="search_dashboard_button"
        onClick={() => {
          setProducts("")
          navigate("./search")
          
       
         
        }}
      >
        Search
      </button>

      {isLoggedIn && <Link className= "userProducts_productType" to="/userProducts">My Products</Link>}
    
      
      <div className="navbar_filter">
        
        <input placeholder="type" onChange={(e)=>{

          setFilterType(e.target.value)
        }

        }></input>
       <input placeholder="price"onChange={(e)=>{

setFilterprice(e.target.value)
}

}></input>
        <input placeholder="status" onChange={(e)=>{

setFilterStatus(e.target.value)
}

}></input>
        
        <button onClick={()=>{

          navigate("/filterProducts")
        }}>Filter</button>
        </div>
        </div>
        </>
    )
}

export default Navbar