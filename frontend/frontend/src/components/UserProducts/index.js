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
              <img
                  src={elem.userId.image}
                  className="item_card_photo_dashboard"
                ></img>
         
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
        })}
         <button className="add_product_button" onClick={()=>{
          navigate("/addProduct")
         }}>ADD NEW PRODUCT</button>
        </div>
         
        
         

      
     
    </>
  );
};

export default UserProducts;
