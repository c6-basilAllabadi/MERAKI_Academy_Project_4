import React, { useState } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"
import "./style.css"
import Google from "../Google/index.js";
const Login = () => {
  const userContext1 = useContext(userContext)
  let setLoginEmail = userContext1.setLoginEmail
  let setLoginPassword = userContext1.setLoginPassword
  let loginemail = userContext1.loginemail
  let loginpassword = userContext1.loginpassword
  let isLoggedIn = userContext1.isLoggedIn
  let setIsLoggedIn = userContext1.setIsLoggedIn
  let token =userContext1.token
  let setToken = userContext1.setToken
  let user =userContext1.user
  let setUser=userContext1.setUser
  const [loginMessage,setLoginMessage]=useState("")
  let googleButton = userContext1.googleButton
  
  let setGoogleButton =userContext1.setGoogleButton

  const navigate = useNavigate()

  return(
    
   
    <div className="login_container">

   <div className="login_form">
    <h2>Login</h2>
    <input type="email" placeholder="Enter your Email" onChange={(e)=>{
      setLoginEmail(e.target.value)

    }}></input>
    <input type="password" placeholder="Enter your Password" onChange={(e)=>{
        setLoginPassword(e.target.value)
    }}></input>
    <button onClick={async()=>{ await axios.post('http://localhost:5000/login',{email:loginemail,password:loginpassword}).then((response)=>{
      console.log(response)
    
   
    
      setLoginMessage("login Success")
      setIsLoggedIn(true)
      setToken(response.data.token)
      localStorage.setItem("Token", JSON.stringify(response.data.token))
    localStorage.setItem("loggedIn",JSON.stringify(true))
      setUser(response.data.userId)
      localStorage.setItem("user1",JSON.stringify(response.data.userId))
      navigate("/dashboard")
     
    }).catch((err)=>{
console.log(err.response.data.message)
setLoginMessage(err.response.data.message)
    })

     

    }}>Login</button>
    
    <div>{loginMessage}</div>
    <p className="register_now_p">Don't Have an Account? <p className ="register_now_botton" onClick={()=>{
      navigate("/register")
    }}>Register Now</p> </p>
     <p className="Google_login">Have an Google Account !!<p className ="register_now_botton" onClick={()=>{
    setGoogleButton(true)
    }}>Login By Google </p></p>
    </div>
    <img className="navbar_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png"></img>
    {googleButton&&<Google/>}
    </div>

    )

};
export default Login;
