import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"
import "./style.css"


  const Favorites = ()=>{
    const userContext1 = useContext(userContext)
    let setLoginEmail = userContext1.setLoginEmail
    let setLoginPassword = userContext1.setLoginPassword
    let loginemail = userContext1.loginemail
    let loginpassword = userContext1.loginpassword
    let isLoggedIn = userContext1.isLoggedIn
    let setIsLoggedIn = userContext1.setIsLoggedIn
    let token =userContext1.token
    let setToken = userContext1.setToken
    let user =userContext1.user
    let setUser=userContext1.setUser
    const [loginMessage,setLoginMessage]=useState("")
    let arr3
    let userNameMoreInfoId = userContext1.userNameMoreInfoId
    let setUserNameMoreInfoId = userContext1.setUserNameMoreInfoId

    let favoritesProducts = userContext1.favoritesProducts
   let setFavoriteProducts = userContext1.setFavoriteProducts


    const getFavoritesProducts = () => {
        axios
          .get(`http://localhost:5000/favorite/`,{
            headers: {
              authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setFavoriteProducts(response.data.favorites[0].favorites);
            console.log(response.data)
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getFavoritesProducts();
      }, [favoritesProducts]);
    
return (

    <>
    
    {favoritesProducts &&
        favoritesProducts.map((elem, index) => {
          return (
            <div className="item_card_moreInfo_favorites">
        <img
          src={elem.image}
          className="item_card_image_moreInfo_favorites"
        ></img>
        <h3 className="item_card_title_moreInfo_favorites" onClick={() => {}}>
          {elem.title}
        </h3>
        <h3 className="item_card_price_moreInfo_favorites">{elem.price} $</h3>
        <p className="item_card_type_moreInfo_favorites">Type: {elem.type}</p>
        <p className="item_card_city_moreInfo_favorites">City: {elem.city}</p>
        <p className="item_card_carmake_moreInfo_favorites">
          Carmake: {elem.carmake}
        </p>
        <p className="item_card_model_moreInfo_favorites">
          Model: {elem.model}
        </p>
        <p className="item_card_year_moreInfo_favorites">Year: {elem.year}</p>
        <p className="item_card_transmission_moreInfo_favorites">
          Transmission: {elem.transmission}
        </p>
        <p className="item_card_fuel_moreInfo_favorites">Fuel: {elem.fuel}</p>
        <p className="item_card_color_moreInfo_favorites">
          Color: {elem.color}
        </p>
        <p className="item_card_condition_moreInfo_favorites">
          Condition: {elem.condition}
        </p>
        <p className="item_card_Kilometers_moreInfo_favorites">
          Kilometers: {elem.Kilometers}
        </p>
        <p className="item_card_status_moreInfo_favorites">
          Status: {elem.status}
        </p>
        
        {/*<p className="item_card_description_moreInfo"><p>description</p>{moreInfoProduct.description}</p>*/}
        <p className="item_card_likes_moreInfo_favorites">
          Likes: {elem.likes}
        </p>
        
        <button className = "item_card_Remove_moreInfo" onClick={()=>{

axios.put(`http://localhost:5000/favorite/${elem._id}`,{},{
    headers: {
      authorization: "Bearer " + token,
    },
  }).then((response)=>{
    
}).catch((err)=>{
    console.log(err.message)
})
}}>Remove From Favorites</button>
            </div>
          );
        })}
    
    
    
    
    
    
    </>
)
  }

  export default Favorites