import React, { useState } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"
const Login = () => {
  const userContext1 = useContext(userContext)
  let setLoginEmail = userContext1.setLoginEmail
  let setLoginPassword = userContext1.setLoginPassword
  let loginemail = userContext1.loginemail
  let loginpassword = userContext1.loginpassword
  let isLoggedIn = userContext1.isLoggedIn
  let setIsLoggedIn = userContext1.setIsLoggedIn
  const [loginMessage,setLoginMessage]=useState("")
  const navigate = useNavigate()

  return <div>
    
    <input type="email" placeholder="Enter your Email" onChange={(e)=>{
      setLoginEmail(e.target.value)

    }}></input>
    <input type="password" placeholder="Enter your Password" onChange={(e)=>{
        setLoginPassword(e.target.value)
    }}></input>
    <button onClick={()=>{ axios.post('http://localhost:5000/login',{email:loginemail,password:loginpassword}).then((response)=>{
      console.log(response.data.token)
      setLoginMessage("login Success")
      setIsLoggedIn(true)
      navigate("/dashboard")
     
    }).catch((err)=>{
console.log(err.response.data.message)
setLoginMessage(err.response.data.message)
    })

     

    }}>Login</button>
    <div>{loginMessage}</div>
    
    
    </div>;

};
export default Login;
