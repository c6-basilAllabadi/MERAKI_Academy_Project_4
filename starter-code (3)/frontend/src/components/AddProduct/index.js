import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const AddProduct = () => {
  const userContext1 = useContext(userContext);
  let setLoginEmail = userContext1.setLoginEmail;
  let setLoginPassword = userContext1.setLoginPassword;
  let loginemail = userContext1.loginemail;
  let loginpassword = userContext1.loginpassword;
  let isLoggedIn = userContext1.isLoggedIn;
  let setIsLoggedIn = userContext1.setIsLoggedIn;
  let token = userContext1.token;
  let setToken = userContext1.setToken;
  let user = userContext1.user;
  let setUser = userContext1.setUser;
  let userProducts = userContext1.userProducts;
  let setUserProducts = userContext1.setUserProducts;
  const [loginMessage, setLoginMessage] = useState("");
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductType, setNewProductType] = useState("");
  const [addNewProductMessage, setAddNewProductMessage] = useState("");
  const [deleteProductMessage, setDeleteProductMessage] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductCity, setNewProductCity] = useState("");
  const [newProductCarmake, setNewProductCarmake] = useState("");
  const [newProductModel, setNewProductModel] = useState("");
  const [newProductYear, setNewProductYear] = useState("");
  const [newProductTransmission, setNewProductTransmission] = useState("");
  const [newProductFuel, setNewProductFuel] = useState("");
  const [newProductColor, setNewProductColor] = useState("");
  const [newProductCondition, setNewProductCondition] = useState("");
  const [newProductKilometers, setNewProductKilometers] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newStatus, setNewStatus] = useState("");
  let updateProduct = userContext1.updateProduct;
  let setUpdateProduct = userContext1.setUpdateProduct;
  let setMoreInfoProduct = userContext1.setMoreInfoProduct;
  let moreInfoProduct = userContext1.moreInfoProduct;
  let arr5;
  let arr6;
  const navigate = useNavigate();

  return (
    <>
    
      <div className="add_product_container">
      <h2 className="add_new_product_p">Add New Product</h2>
        
        <input
          placeholder="Image"
          type="text"
          onChange={(e) => {
            setNewProductImage(e.target.value);
          }}
        ></input>
        <input
          placeholder="Title"
          type="text"
          onChange={(e) => {
            setNewProductTitle(e.target.value);
          }}
        ></input>
        <input
          placeholder="Description"
          type="text"
          onChange={(e) => {
            setNewProductDescription(e.target.value);
          }}
        ></input>
        <input
          placeholder="Price"
          type="number"
          onChange={(e) => {
            setNewProductPrice(e.target.value);
          }}
        ></input>
        <select
          id="Type"
          onChange={(e) => {
            setNewProductType(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Type
          </option>
          <option value="Car">Car</option>
          <option value="Pickup">Pickup</option>
          <option value="Bus">Bus</option>
        </select>

        <select
          id="City"
          onChange={(e) => {
            setNewProductCity(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            City
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

        <input
          placeholder="Carmake"
          type="text"
          onChange={(e) => {
            setNewProductCarmake(e.target.value);
          }}
        ></input>

        <input
          placeholder="Model"
          type="text"
          onChange={(e) => {
            setNewProductModel(e.target.value);
          }}
        ></input>
<select id="year" onChange={(e) => {
            setNewProductYear(e.target.value)
          }}>
          <option value="" disabled selected hidden>
          Year
          </option>
    <option value="1940">1940</option>
    <option value="1941">1941</option>
    <option value="1942">1942</option>
    <option value="1943">1943</option>
    <option value="1944">1944</option>
    <option value="1945">1945</option>
    <option value="1946">1946</option>
    <option value="1947">1947</option>
    <option value="1948">1948</option>
    <option value="1949">1949</option>
    <option value="1950">1950</option>
    <option value="1951">1951</option>
    <option value="1952">1952</option>
    <option value="1953">1953</option>
    <option value="1954">1954</option>
    <option value="1955">1955</option>
    <option value="1956">1956</option>
    <option value="1957">1957</option>
    <option value="1958">1958</option>
    <option value="1959">1959</option>
    <option value="1960">1960</option>
    <option value="1961">1961</option>
    <option value="1962">1962</option>
    <option value="1963">1963</option>
    <option value="1964">1964</option>
    <option value="1965">1965</option>
    <option value="1966">1966</option>
    <option value="1967">1967</option>
    <option value="1968">1968</option>
    <option value="1969">1969</option>
    <option value="1970">1970</option>
    <option value="1971">1971</option>
    <option value="1972">1972</option>
    <option value="1973">1973</option>
    <option value="1974">1974</option>
    <option value="1975">1975</option>
    <option value="1976">1976</option>
    <option value="1977">1977</option>
    <option value="1978">1978</option>
    <option value="1979">1979</option>
    <option value="1980">1980</option>
    <option value="1981">1981</option>
    <option value="1982">1982</option>
    <option value="1983">1983</option>
    <option value="1984">1984</option>
    <option value="1985">1985</option>
    <option value="1986">1986</option>
    <option value="1987">1987</option>
    <option value="1988">1988</option>
    <option value="1989">1989</option>
    <option value="1990">1990</option>
    <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
</select>
      
        <select
          id="Transmition"
          onChange={(e) => {
            setNewProductTransmission(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Transmition
          </option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
        <select
          id="Fuel"
          onChange={(e) => {
            setNewProductFuel(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Fuel
          </option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        <input
          placeholder="Color"
          type="text"
          onChange={(e) => {
            setNewProductColor(e.target.value);
          }}
        ></input>
        <select
          id="Condition"
          onChange={(e) => {
            setNewProductCondition(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Condition
          </option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        <input
          placeholder="Kilometers"
          type="text"
          onChange={(e) => {
            setNewProductKilometers(e.target.value);
          }}
        ></input>

        <select
          id="Status"
          onChange={(e) => {
            setNewStatus(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>
            Status
          </option>
          <option value="Great">Great</option>
          <option value="Good">Good</option>
          <option value="fulfilling">fulfilling</option>
        </select>

        <button
        className="add_product"
          onClick={() => {
            axios
              .post(
                "http://localhost:5000/product/",
                {
                  image: newProductImage,
                  title: newProductTitle,
                  description: newProductDescription,
                  price: newProductPrice,
                  type: newProductType,
                  city: newProductCity,
                  carmake: newProductCarmake,
                  model: newProductModel,
                  year: newProductYear,
                  transmission: newProductTransmission,
                  fuel: newProductFuel,
                  color: newProductColor,
                  condition: newProductCondition,
                  Kilometers: newProductKilometers,
                  status: newStatus,
                  userId: user,
                  likes: 0,
                },
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                setAddNewProductMessage(response.data.message);
                let arr6 = userProducts.concat(response.data.product);
                setUserProducts(arr6);
              })
              .catch((err) => {
                setAddNewProductMessage(err.response.data.message);
              });
          }}
        >
          Add New Product
        </button>
        {addNewProductMessage}
      </div>
    </>
  );
};

export default AddProduct;
