import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"



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
    const [favoritesProducts,setFavoriteProducts] = useState("")


    const getFavoritesProducts = () => {
        axios
          .get(`http://localhost:5000/favorite/`,{
            headers: {
              authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setFavoriteProducts(response.data.favorites[0].favorites);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getFavoritesProducts();
      }, []);
    
return (

    <>
    {favoritesProducts &&
        favoritesProducts.map((elem, index) => {
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
              <button onClick={()=>{

                axios.put(`http://localhost:5000/favorite/${elem._id}`,{},{
                    headers: {
                      authorization: "Bearer " + token,
                    },
                  }).then((response)=>{
                    console.log(response.data.message)
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