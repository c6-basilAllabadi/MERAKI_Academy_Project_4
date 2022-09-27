import React, { useState } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"
const Login = () => {
  const userContext1 = useContext(userContext)
  let setEmail = userContext1.setEmail
  let setPassword = userContext1.setPassword
  let email = userContext1.email
  let password = userContext1.password
  const [loginMessage,setLoginMessage]=useState("")
  const navigate = useNavigate()

  return <div>
    <h1>hi from basel</h1>
    <input type="email" placeholder="Enter your Email" onChange={(e)=>{
      setEmail(e.target.value)

    }}></input>
    <input type="password" placeholder="Enter your Password" onChange={(e)=>{
        setPassword(e.target.value)
    }}></input>
    <button onClick={()=>{ axios.post('http://localhost:5000/login',{email,password}).then((response)=>{
      console.log(response.data.token)
      setLoginMessage("login Success")
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
