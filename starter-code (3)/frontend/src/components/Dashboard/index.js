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


  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
    
      <div className="item_card_dashboard_container">
      {products &&
        products.map((elem, index) => {
          return (
            <div className ="item_card_dashboard" key ={index}>
              <img src={elem.image} className="item_card_image_dashboard"></img>
              <p className="item_card_title_dashboard">Title: {elem.title}</p>
              <p className="item_card_price_dashboard">Price: {elem.price}</p>
              <p className="item_card_type_dashboard">Type: {elem.type}</p>
              <p className="item_card_status_dashboard">Status: {elem.status}</p>
              <p className="item_card_userName_dashboard">
                User: {elem.userId.firstName} {elem.userId.lastName}
              </p>

              <p className="item_card_likes_dashboard">Likes: {elem.likes}</p>
              <button className="item_card_addToFavorite_dashboard" onClick={()=>{
                axios.post(`http://localhost:5000/favorite/${elem._id}`,{},{
                  headers: {
                    authorization: "Bearer " + token,
                  }}).then((response)=>{
                  console.log(response.data.message)
                }).catch((err)=>{
                  console.log(err.message)
                })
              }}>Add to Favorite</button>
            </div>
          );
        })}
        </div>
    </>
  );
};

export default Dashboard;
