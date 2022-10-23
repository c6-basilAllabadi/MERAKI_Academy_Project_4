import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./style.css"


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
  let userNameMoreInfoId = userContext1.userNameMoreInfoId
  let setUserNameMoreInfoId = userContext1.setUserNameMoreInfoId
  const [userNameMoreInfo,setUserNameMoreInfo] = useState("")

  const getUserInfos = ()=>{
    axios.get(`http://localhost:5000/user/${userNameMoreInfoId}`).then((response)=>{
        setUserNameMoreInfo(response.data.userInfo[0])
        console.log(response.data.userInfo[0])
    }).catch((err)=>{
        console.log(err)

    })
}
useEffect(()=>{
    getUserInfos()
},[])
  return(

    <>
    <div className="userInfo">
    <img src={userNameMoreInfo.image}></img>
 <p>Name : {userNameMoreInfo.firstName} {userNameMoreInfo.lastName}</p>
 <p> Age : {userNameMoreInfo.age}</p>
 <p> Gender : {userNameMoreInfo.gender}</p>
 <p> Country : {userNameMoreInfo.country}</p>
 <p> Date Registered : {userNameMoreInfo.dateRegistered}</p>
 <p>Phone Number : {userNameMoreInfo.phoneNumber}</p>
 <p>Email : {userNameMoreInfo.email}</p>


 
</div>
    </>
  )
}

export default UserMoreInfo
