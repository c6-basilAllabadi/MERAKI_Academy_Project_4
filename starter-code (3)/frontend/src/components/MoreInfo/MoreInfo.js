import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";
import "./style.css"


const MoreInfo = ()=>{
    const userContext1 = useContext(userContext)
    let setMoreInfoProduct =userContext1.setMoreInfoProduct
    let moreInfoProduct = userContext1.moreInfoProduct

    return (

        <>
       
       <div className ="item_card_dashboard" >
              <img src={moreInfoProduct.image} className="item_card_image_dashboard"></img>
              <p className="item_card_title_dashboard" onClick={()=>{
               
              }}>Title: {moreInfoProduct.title}</p>
              <p className="item_card_price_dashboard">Price: {moreInfoProduct.price}</p>
              <p className="item_card_type_dashboard">Type: {moreInfoProduct.type}</p>
              <p className="item_card_status_dashboard">Status: {moreInfoProduct.status}</p>
              <p className="item_card_userName_dashboard">
                User: {moreInfoProduct.userId.firstName} {moreInfoProduct.userId.lastName}
              </p>

              <p className="item_card_likes_dashboard">Likes: {moreInfoProduct.likes}</p>
              <button className="item_card_addToFavorite_dashboard" onClick={()=>{
                axios.post(`http://localhost:5000/favorite/${moreInfoProduct._id}`,{},{
                  headers: {
                    authorization: "Bearer " + token,
                  }}).then((response)=>{
                  console.log(response.data.message)
                }).catch((err)=>{
                  console.log(err.message)
                })
              }}>Add to Favorite</button>
            </div>

       
        
        </>
    )
}

export default MoreInfo