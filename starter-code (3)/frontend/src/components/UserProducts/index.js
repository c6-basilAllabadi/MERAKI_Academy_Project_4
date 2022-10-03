import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const UserProducts = () => {
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
  let setMoreInfoProduct =userContext1.setMoreInfoProduct
  let moreInfoProduct = userContext1.moreInfoProduct
  let arr5
  let arr6
  const navigate = useNavigate();
  const getUserProducts = () => {
    axios
      .get(`http://localhost:5000/product/searchUser/${user}`)
      .then((response) => {
        console.log(response.data);
        setUserProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserProducts();
  }, []);

  return (
    <>
    <div className="item_card_dashboard_container_product">
      {userProducts &&
        userProducts.map((elem, index) => {
          return (
               
            <div className ="item_card_dashboard_product" key ={index}>
              <img src={elem.image} className="item_card_image_dashboard"></img>
              <p className="item_card_title_dashboard" onClick={()=>{
                setMoreInfoProduct(elem)
                navigate("/moreInfo")
              }}>{elem.title}</p>
              <p className="item_card_price_dashboard">{elem.price} $</p>
              <p className="item_card_city_dashboard"> {elem.city}</p>
              <p className="item_card_carmake_dashboard"> {elem.type} | {elem.carmake} | {elem.model} | {elem.year}</p>
             
              <p className="item_card_userName_dashboard">
              {elem.userId.firstName} {elem.userId.lastName}</p>
           
         
              <button className="delete_Product"
                onClick={() => {
                  axios
                    .delete(`http://localhost:5000/product/${elem._id}`, {
                      headers: {
                        authorization: "Bearer " + token,
                      },
                    })
                    .then((response) => {
                      console.log(response.data.product)
                      arr5=userProducts.filter((elem,index)=>{
                        return elem._id !==response.data.product
                      })
                      setUserProducts(arr5)
                      setDeleteProductMessage(response.data.message);
                    })
                    .catch((err) => {
                      setDeleteProductMessage(err.message);
                    });
                }}
              >
                Delete This Product
              </button>
              

              <button className="update_Product"
                onClick={() => {
                  setUpdateProduct(elem);
                  console.log(updateProduct);
                  navigate("/updateProduct");
                }}
              >
                Update This Product
              </button>
            </div>
          );
        })}</div>
         
         

      <div className="add_product_container">
       
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
        <input
          placeholder="Type"
          type="text"
          onChange={(e) => {
            setNewProductType(e.target.value);
          }}
        ></input>
        <input
          placeholder="City"
          type="text"
          onChange={(e) => {
            setNewProductCity(e.target.value);
          }}
        ></input>
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

        <input
          placeholder="Year"
          type="text"
          onChange={(e) => {
            setNewProductYear(e.target.value);
          }}
        ></input>
        <input
          placeholder="Transmission"
          type="text"
          onChange={(e) => {
            setNewProductTransmission(e.target.value);
          }}
        ></input>
        <input
          placeholder="Fuel"
          type="text"
          onChange={(e) => {
            setNewProductFuel(e.target.value);
          }}
        ></input>
        <input
          placeholder="Color"
          type="text"
          onChange={(e) => {
            setNewProductColor(e.target.value);
          }}
        ></input>
        <input
          placeholder="Condition"
          type="text"
          onChange={(e) => {
            setNewProductCondition(e.target.value);
          }}
        ></input>
        <input
          placeholder="Kilometers"
          type="text"
          onChange={(e) => {
            setNewProductKilometers(e.target.value);
          }}
        ></input>
        <input placeholder="Status"
          type="text"
          onChange={(e) => {
            setNewStatus(e.target.value);
          }}></input>

        <button
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
                  likes:0,
                },
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                setAddNewProductMessage(response.data.message);
             let arr6=userProducts.concat(response.data.product)
             setUserProducts(arr6)
              })
              .catch((err)=>{
            setAddNewProductMessage(err.response.data.message);
          })}}
        >
          Add New Product
        </button>
        {addNewProductMessage}
     </div>
     
    </>
  );
};

export default UserProducts;
