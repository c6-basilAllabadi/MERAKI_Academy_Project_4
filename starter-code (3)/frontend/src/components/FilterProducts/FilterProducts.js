

import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";





const FilterProducts = ()=>{

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
let setFilterprice=userContext1.setFilterprice
let setFilterStatus = userContext1.setFilterStatus
let setFilterType = userContext1.setFilterType
let filterPrice = userContext1.filterPrice
let filterStatus = userContext1.filterStatus
let fliterType=userContext1.fliterType
const [ filteredProducts , setFilteredProducts]=useState("")

const getFilteredProducts =()=>{

    axios.get(`http://localhost:5000/product/filter/${fliterType}.${filterPrice}.${filterStatus}`,).then((response)=>{
        setFilteredProducts(response.data.products);
        console.log(response.data.products)
    }).catch((err)=>{
        console.log(err);
    })
} 
useEffect(()=>{
getFilteredProducts()

},[])

    return (

        <>
        
        {filteredProducts &&
        filteredProducts.map((elem, index) => {
          return (
            <div key = {index}>
              <h1>Title: {elem.title}</h1>
              <h5>Description: {elem.description}</h5>
              <p>Price: {elem.price}</p>
              <p>Type: {elem.type}</p>
              <p>Status: {elem.status}</p>
              <p>
                User: {elem.userId.firstName} {elem.userId.lastName}
              </p>

              <p>Likes: {elem.likes}</p>
            </div>
          );
        })}
        
        
        
        </>
    )
}

export default FilterProducts