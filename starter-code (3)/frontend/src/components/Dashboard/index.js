import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";
import "./style.css"


const Dashboard = () => {

  const userContext1 = useContext(userContext)
  let searchWord= userContext1.searchWord
  let setSearchWord = userContext1.setSearchWord
  let searchProducts=userContext1.searchProducts
  let setSearchProducts = userContext1.setSearchProducts
  let searchStatus = userContext1.searchStatus
  let setSearchStatus = userContext1.setSearchStatus
  let productType=userContext1.productType
  let setProductType = userContext1.setProductType
  let token =userContext1.token
    let setToken = userContext1.setToken
    let user = userContext1.user
    let products=userContext1. products
    let setProducts = userContext1.setProducts
  const navigate = useNavigate()
  const [dashboardProductsStatus, setDashboardProductsStatus] = useState(true);
  let setMoreInfoProduct =userContext1.setMoreInfoProduct
  let moreInfoProduct = userContext1.moreInfoProduct
  let favoritesProducts = userContext1.favoritesProducts
  let setFavoriteProducts = userContext1.setFavoriteProducts
  const [addtoFavoriteButton ,setAddtoFavoriteButton] = useState("Add to Favorite")
  let arr4
  let arr1
  let arr3
  const[arr2,setarr2]=useState("")
  

  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
       
        setProducts(response.data.products);
     
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFavoritesProducts = () => {
    axios
      .get(`http://localhost:5000/favorite/`,{
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setFavoriteProducts(response.data.favorites[0].favorites);
  
        arr1 =response.data.favorites[0].favorites.map((elem,index)=>{
          return elem._id
        })
        setarr2(arr1)
  
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  
  }, []);
 
  useEffect(() => {
    getFavoritesProducts();
  }, [favoritesProducts]);
 
  return (
    <>
   
      <div className="item_card_dashboard_container">
      {products &&
        products.map((elem, index) =>{
         
    
          return (
            
            <div className ="item_card_dashboard" key ={index}>
              <img src={elem.image} className="item_card_image_dashboard"></img>
              <p className="item_card_title_dashboard" onClick={()=>{
                setMoreInfoProduct(elem)
                navigate("/moreInfo")
              }}>{elem.title}</p>
              <p className="item_card_price_dashboard">{elem.price} $</p>
              <p className="item_card_city_dashboard"> {elem.city}</p>
              <p className="item_card_carmake_dashboard"> {elem.type} | {elem.carmake} | {elem.model} | {elem.year}</p>
             
              
              <img src ={elem.userId.image} className="item_card_photo_dashboard"></img>
              <p className="item_card_userName_dashboard">
              {elem.userId.firstName} {elem.userId.lastName}</p>
              {arr2.includes(elem._id)&&<button className="item_card_addToFavorite_dashboard" ><i className='fas fa-star' ></i> Added to Favorite</button>}
                  {!arr2.includes(elem._id)&&<button className="item_card_addToFavorite_dashboard" onClick={()=>{
                    axios.post(`http://localhost:5000/favorite/${elem._id}`,{},{
                      headers: {
                        authorization: "Bearer " + token,
                      }}).then((response)=>{
                        arr4 = favoritesProducts.concat(elem)
                        console.log(arr4)
                        setFavoriteProducts(arr4)
                    }).catch((err)=>{
                      console.log(err.message)
                    })
                  }}><i className='fas fa-star' ></i>   Add to Favorite  </button>}
        
        <button className="item_card_likes_dashboard" onClick={()=>{
          axios.put(`http://localhost:5000/product/${elem._id}`,{likes:`${elem.likes+1}`},{
            headers: {
              authorization: "Bearer " + token,
            },
          }).then((response)=>{
         elem.likes = elem.likes+1
         console.log(products)
         
          }).catch((err)=>{
            console.log(err)
          })
        }}> <i className='fas fa-thumbs-up'></i>    Like {elem.likes}</button>
       
            </div>
            
          );
        })}
        </div>
    </>
  );
};

export default Dashboard;
