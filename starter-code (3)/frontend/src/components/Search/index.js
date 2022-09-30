
import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./style.css"

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
          console.log(response.data.products)
          
     } ).catch((err)=>{
        console.log(err.message)
     })}

     useEffect(()=>{
        getSearchProducts()

     },[])

    return (

      <>
        <div className="item_card_search-container">
        {searchProducts &&
            searchProducts.map((elem, index) => {
              return (
               
                <div key ={index} className="item_card_search">
                   <img src={elem.image} className="item_card_image_search"></img>
                  <p className="item_card_title_search">Title: {elem.title}</p>
                  
                  <p className="item_card_price_search">Price: {elem.price}</p>
                  <p className="item_card_type_search">Type: {elem.type}</p>
                  <p className="item_card_status_search">Status: {elem.status}</p>
                  <p className="item_card_user_search">
                    User: {elem.userId.firstName} {elem.userId.lastName}
                  </p>

                  <p className="item_card_likes_search">Likes: {elem.likes}</p>
                </div>
              );
            })
      
        
    }
     </div>
</>)}
       
       export default Search