import React, { useState } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"


  const UserProducts = ()=>{
    const userContext1 = useContext(userContext)
    let setLoginEmail = userContext1.setLoginEmail
    let setLoginPassword = userContext1.setLoginPassword
    let loginemail = userContext1.loginemail
    let loginpassword = userContext1.loginpassword
    let isLoggedIn = userContext1.isLoggedIn
    let setIsLoggedIn = userContext1.setIsLoggedIn
    const [loginMessage,setLoginMessage]=useState("")
    const navigate = useNavigate()
    return (
        <>
        
        
        
        
        </>
    )
  }

  export default UserProducts