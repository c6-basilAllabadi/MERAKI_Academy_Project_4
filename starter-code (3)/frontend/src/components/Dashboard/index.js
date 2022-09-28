import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";


const Dashboard = () => {
  const [products, setProducts] = useState("");
  const userContext1 = useContext(userContext)
  let searchWord= userContext1.searchWord
  let setSearchWord = userContext1.setSearchWord
  let searchProducts=userContext1.searchProducts
  let setSearchProducts = userContext1.setSearchProducts
  let searchStatus = userContext1.searchStatus
  let setSearchStatus = userContext1.setSearchStatus
  let productType=userContext1.productType
  let setProductType = userContext1.setProductType

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
    <h2 onClick={()=>{
      setProductType("car")
      Navigate("/productsTypes")
    }}>Cars</h2>
    <h2 onClick={()=>{
      setProductType("laptop")
      Navigate("/productsTypes")
    }}>Laptops</h2>
    <h2 onClick={()=>{
      setProductType("mobile")
      Navigate("/productsTypes")
    }}>Mobiles</h2>
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setProducts("")
          setSearchStatus(true)
        }}
      >
        Search
      </button>

      <Link to="/userProducts">user products</Link>
      {products &&
        products.map((elem, index) => {
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
        })}
    </>
  );
};

export default Dashboard;
