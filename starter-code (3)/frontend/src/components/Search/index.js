
import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

const Search = ()=>{
    const userContext1 = useContext(userContext)
    let searchWord= userContext1.searchWord
    let setSearchWord = userContext1.setSearchWord
    let searchProducts=userContext1.searchProducts
    let setSearchProducts = userContext1.setSearchProducts

    const getSearchProducts = ()=>{
        axios
        .get(`http://localhost:5000/product/search/${searchWord}`)
        .then((response) => {
          setSearchProducts(response.data.products);
          console.log(searchProducts)
          
     } ).catch((err)=>{
        console.log(err.message)
     })}

     useEffect(()=>{
        getSearchProducts()

     },[])

    return (

      <>
        
        {searchProducts &&
            searchProducts.map((elem, index) => {
              return (
               
                <div>
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
            })
    
        
        
        
    }
</>)}
       
       export default Search