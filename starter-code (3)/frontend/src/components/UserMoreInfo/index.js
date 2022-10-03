import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import Search from "../Search/index";


const UserMoreInfo = () => {
  const userContext1 = useContext(userContext);
  let setMoreInfoProduct = userContext1.setMoreInfoProduct;
  let moreInfoProduct = userContext1.moreInfoProduct;
  let token = userContext1.token;
  let user = userContext1.user;
  let setUser = userContext1.setUser;
  const [newComment, setNewComment] = useState("");
  const [user1, setuser1] = useState(user);
  const navigate = useNavigate()
  let userNameMoreInfo = userContext1.userNameMoreInfo
  let setUserNameMoreInfo = userContext1.setUserNameMoreInfo
  return(

    <>
    
    
    
    </>
  )
}

export default UserMoreInfo
