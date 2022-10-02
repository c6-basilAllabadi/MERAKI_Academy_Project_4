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
    let token =userContext1.token

    return (

        <>
        
       
       <div className ="item_card_moreInfo" >
              <img src={moreInfoProduct.image} className="item_card_image_moreInfo"></img>
              <p className="item_card_title_moreInfo" onClick={()=>{
               
              }}>Title: {moreInfoProduct.title}</p>
              <p className="item_card_price_moreInfo">{moreInfoProduct.price} $</p>
              <p className="item_card_type_moreInfo">Type: {moreInfoProduct.type}</p>
              <p className="item_card_city_moreInfo">City: {moreInfoProduct.city}</p>
              <p className="item_card_carmake_moreInfo">Carmake: {moreInfoProduct.carmake}</p>
              <p className="item_card_model_moreInfo">Mdel: {moreInfoProduct.model}</p>
              <p className="item_card_year_moreInfo">Year: {moreInfoProduct.year}</p>
              <p className="item_card_transmission_moreInfo">Transmission: {moreInfoProduct.transmission}</p>
              <p className="item_card_fuel_moreInfo">Fuel: {moreInfoProduct.fuel}</p>
              <p className="item_card_color_moreInfo">Color: {moreInfoProduct.color}</p>
              <p className="item_card_condition_moreInfo">Condition: {moreInfoProduct.condition}</p>
              <p className="item_card_Kilometers_moreInfo">Kilometers: {moreInfoProduct.Kilometers}</p>
              <p className="item_card_status_moreInfo">Status: {moreInfoProduct.status}</p>
              <img src ={moreInfoProduct.userId.image} className="item_card_photo_moreInfo"></img>
              <p className="item_card_userName_moreInfo">
                User: {moreInfoProduct.userId.firstName} {moreInfoProduct.userId.lastName}
              </p>
{/*<p className="item_card_description_moreInfo"><p>description</p>{moreInfoProduct.description}</p>*/}
              <p className="item_card_likes_moreInfo">Likes: {moreInfoProduct.likes}</p>
              <button className="item_card_addToFavorite_moreInfo" onClick={()=>{
                axios.post(`http://localhost:5000/favorite/${moreInfoProduct._id}`,{},{
                  headers: {
                    authorization: "Bearer " + token,
                  }}).then((response)=>{
                  console.log(response.data.message)
                }).catch((err)=>{
                  console.log(err.message)
                })
              }}>Add to Favorite </button>
               <button className="item_card_like_dashboard" onClick={()=>{
          axios.put(`http://localhost:5000/product/${moreInfoProduct._id}`,{likes:`${moreInfoProduct.likes+1}`},{
            headers: {
              authorization: "Bearer " + token,
            },
          }).then((response)=>{
            console.log(response)
          }).catch((err)=>{
            console.log(err)
          })
        }}>Like</button>
            </div>

       
        
        </>
    )
}

export default MoreInfo