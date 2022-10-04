import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Search from "../Search/index";
import "./style.css";

const AdminPanel = () => {
  const [adminloginemail, setAdminLoginEmail] = useState("");
  const [adminloginpassword, setAdminLoginPassword] = useState("");
  const [adminloginMessage, setAdminLoginMessage] = useState("");
  const [adminPanelProducts, setAdminPanelProducts] = useState("");
  const [adminIsLoggedIn, setAdminIsLoggedIn] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [adminLoginRole, setAdminLoginRole] = useState("");
  const [AdminDeleteProductMessage,setAdminDeleteProductMessage]=useState("")
  const getAllProducts = () => {
    axios
      .get(`http://localhost:5000/product/10000`)
      .then((response) => {
        setAdminPanelProducts(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [adminPanelProducts]);

  return (
    <>
      {!adminIsLoggedIn &&
    <div className="login_container">
        <div className="login_form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setAdminLoginEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setAdminLoginPassword(e.target.value);
            }}
          ></input>

          <button
            onClick={async () => {
              await axios
                .post("http://localhost:5000/login/Admin", {
                  email: adminloginemail,
                  password: adminloginpassword,
                })
                .then((response) => {
                  console.log(response);

                  setAdminLoginMessage("login Success");
                  setAdminIsLoggedIn(true);
                  setAdminToken(response.data.token);
                })
                .catch((err) => {
                  console.log(err.response.data.message);
                  setAdminLoginMessage(err.response.data.message);
                });
            }}
          >
            Login
          </button>

          <div>{adminloginMessage}</div>
        </div>
      </div>}


        {adminIsLoggedIn && <div className="item_card_dashboard_container_product">
        {adminPanelProducts &&
          adminPanelProducts.map((elem, index) => {
            return (
              <div className="item_card_dashboard_product" key={index}>
                <img
                  src={elem.image}
                  className="item_card_image_dashboard"
                ></img>
                <p
                >
                  {elem.title}
                </p>
                <p className="item_card_price_dashboard">{elem.price} $</p>
                <p className="item_card_city_dashboard"> {elem.city}</p>
                <p className="item_card_carmake_dashboard">
                  {" "}
                  {elem.type} | {elem.carmake} | {elem.model} | {elem.year}
                </p>

                <p className="item_card_userName_dashboard">
                  {elem.userId.firstName} {elem.userId.lastName}
                </p>
                <img
                  src={elem.userId.image}
                  className="item_card_photo_dashboard"
                ></img>

                <button
                  className="delete_Product"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5000/product/${elem._id}`, {
                        headers: {
                          authorization: "Bearer " + adminToken,
                        },
                      })
                      .then((response) => {
                        console.log(response.data.product);
                        arr5 = adminPanelProducts.filter((elem, index) => {
                          return elem._id !== response.data.product;
                        });
                        setAdminPanelProducts(arr5);
                        setAdminDeleteProductMessage(response.data.message);
                      })
                      .catch((err) => {
                        setAdminDeleteProductMessage(err.message);
                      });
                  }}
                >
                  Delete This Product
                </button>

              </div>
            );
          })}
      </div>}
    </>
  );
};

export default AdminPanel;
