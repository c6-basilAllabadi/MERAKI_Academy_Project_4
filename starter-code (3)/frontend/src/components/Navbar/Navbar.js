import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Search from "../Search/index";
import "./style.css";
import ProductsTypes from "../ProductsTypes/index.js";

const Navbar = () => {
  const userContext1 = useContext(userContext);
  const navigate = useNavigate();
  let setDashboardStatus = userContext1.setDashboardStatus;
  let setSearchStatus = userContext1.setSearchStatus;
  let setToken = userContext1.setToken;
  let setIsLoggedIn = userContext1.setIsLoggedIn;
  let isLoggedIn = userContext1.isLoggedIn;
  let searchStatus = userContext1.searchStatus;
  let setProductType = userContext1.setProductType;
  let setSearchWord = userContext1.setSearchWord;
  let setProducts = userContext1.setProducts;
  let productType = userContext1.productType;
  let setFilterprice = userContext1.setFilterprice;
  let setFilterStatus = userContext1.setFilterStatus;
  let setFilterType = userContext1.setFilterType;
  let filterPrice = userContext1.filterPrice;
  let filterStatus = userContext1.filterStatus;
  let fliterType = userContext1.fliterType;
  let filterCondition = userContext1.filterCondition;
  let setFilterCondition = userContext1.setFilterCondition;
  let filterYear = userContext1.filterYear;
  let setFilterYear = userContext1.setFilterYear;
  let filterCity = userContext1.filterCity;
  let setFilterCity = userContext1.setFilterCity;
  let filterTransmition = userContext1.filterTransmition;
  let setFilterTransmition = userContext1.setFilterTransmition;
  let filterFuel = userContext1.filterFuel;
  let setFilterFuel = userContext1.setFilterFuel;
  let searchButtonStatus = userContext1.searchButtonStatus;
  let setSearchButtonStatus = userContext1.setSearchButtonStatus;
  let typeProducts = userContext1.typeProducts;
  let setTypeProducts = userContext1.setTypeProducts;
  let favoritesProducts = userContext1.favoritesProducts
  let userProducts = userContext1.userProducts;
  const axios = require("axios");

  return (
    <>
      <div className="navbar_container">
        <img
          className="navbar_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png"
        ></img>
        {!isLoggedIn && (
          <p
            className="navbar_login"
            onClick={() => {
              navigate("/login");
              setDashboardStatus(false);
            }}
          >
            Login
          </p>
        )}

        {!isLoggedIn && (
          <p
            className="navbar_register"
            onClick={() => {
              navigate("/register");
              setDashboardStatus(false);
            }}
          >
            Register
          </p>
        )}

        <p
          className="navbar_dashboard"
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Home
        </p>

        {isLoggedIn && (
          <p className="navbar_favorite" onClick={() => {
            navigate("/favorite");
          }}>
        My Favorites 
          </p>
        )}
        {isLoggedIn && (
          <p
            className="navbar_logout"
            onClick={() => {
              setToken(null);
              setIsLoggedIn(false);

              localStorage.setItem("Token", JSON.stringify(null));
              localStorage.setItem("loggedIn", JSON.stringify(false));
              localStorage.setItem("user1", JSON.stringify(""));
              navigate("/login")
            }}
          >
            Logout
          </p>
          
        )}
        <p className="navbar_contact" onClick={()=>{
            navigate("/contact")
          }}>Contact Us</p>
        <div class="popup">
          <span class="popuptext" id="like">
            Please Login So You Can Like
          </span>
        </div>
        <div class="popup">
          <span class="popuptext" id="favorite">
            Please Login So You Can Add To Favorite
          </span>
        </div>
        <p className="Feedback" onClick={()=>{
            navigate("/feedback")
          }}>Feedback</p>
        <p
          className="car_productType"
          onClick={() => {
            setProductType("Car");
            navigate("/productsTypes");
          }}
        >
          Cars
        </p>
        <p
          className="pickup_productType"
          onClick={() => {
            setProductType("Pickup");
            navigate("/productsTypes");
          }}
        >
          Pickups
        </p>
        <p
          className="bus_productType"
          onClick={() => {
            setProductType("Bus");
            navigate("/productsTypes");
          }}
        >
          Buses
        </p>
        <input
          className="search_dashboard"
          placeholder="Search"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        ></input>
        <button
          className="search_dashboard_button"
          onClick={() => {
            setProducts("");
            navigate("/search");
            setSearchButtonStatus(!searchButtonStatus);
          }}
        >
        <i class="fa fa-search"></i>
        </button>
        

        {isLoggedIn && (
          <p
            className="userProducts_productType"
            onClick={() => {
              navigate("/userProducts");
            }}
          >
            My Products 
          </p>
        )}

        <div className="navbar_filter">
          <select
            id="Type"
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The Type
            </option>
            <option value="Car">Car</option>
            <option value="Pickup">Pickup</option>
            <option value="Bus">Bus</option>
          </select>

          <select
            id="Condition"
            onChange={(e) => {
              setFilterCondition(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The Condition
            </option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>

          <select
            id="Status"
            onChange={(e) => {
              setFilterStatus(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The Status
            </option>
            <option value="Great">Great</option>
            <option value="Good">Good</option>
            <option value="fulfilling">fulfilling</option>
          </select>

          <select
            id="City"
            onChange={(e) => {
              setFilterCity(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The City
            </option>
            <option value="Amman">Amman</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Mafraq">Mafraq</option>
            <option value="Madaba">Madaba</option>
            <option value="As-Salt">As-Salt</option>
            <option value="Jerash">Jerash</option>
            <option value="Ma'an">Ma'an</option>
            <option value="Karak">Karak</option>
            <option value="Tafilah">Tafilah</option>
            <option value="Karak">Karak</option>
          </select>

          <select
            id="Transmition"
            onChange={(e) => {
              setFilterTransmition(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The Transmition
            </option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>

          <select
            id="Fuel"
            onChange={(e) => {
              setFilterFuel(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              Choose The Fuel
            </option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>

          <button className="filter_button"
            onClick={() => {
              navigate("/filterProducts");
              console.log(filterCity);
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
