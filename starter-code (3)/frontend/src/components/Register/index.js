import React from "react";
import { useState } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"
import "./style.css"

const Register = () => {

  const [registerFirstName , setRegisterFirstName]=useState("")
  const [RegisterLastName , setRegisterLastName] = useState("")
  const [registeremail , setRegisterEmail]=useState("")
  const [RegisterPassword , setRegisterPassword] = useState("")
  const [registerAge , setRegisterAge]=useState("")
  const [RegisterCountry , setRegisterCountry] = useState("")
  const [registerGender , setRegisterGender]=useState("")
  const [RegisterPhoneNumber , setRegisterPhoneNumber ] = useState("")
  const [registerMessage,setRegisterMessage] =useState("")
  const navigate = useNavigate()
  return (
  <>
  <div className="register_container">Register
<input type="text" placeholder="Enter Your First Name" onChange={(e)=>{
  setRegisterFirstName(e.target.value)
}}></input>
<input type="text" placeholder="Enter Your Last Name" onChange={(e)=>{
  setRegisterLastName(e.target.value)
}}></input>
<input type="email" placeholder="Enter Your Email" onChange={(e)=>{
 setRegisterEmail(e.target.value)
}}></input>
<input type="password" placeholder="Enter Your Password" onChange={(e)=>{
   setRegisterPassword(e.target.value)
}}></input>
<input type="number" placeholder="Enter Your Age" onChange={(e)=>{
     setRegisterAge(e.target.value)
}}></input>
<input type="text" placeholder="Enter Your Country" onChange={(e)=>{
    setRegisterCountry(e.target.value)
}}></input>
<input type="text" placeholder="Enter Your Gender" onChange={(e)=>{
  setRegisterGender(e.target.value)
}}></input>
<input type="text" placeholder="Enter Your Phone Number" onChange={(e)=>{
  setRegisterPhoneNumber(e.target.value)
}}></input>
<button onClick={()=>{
  axios.post('http://localhost:5000/user',{firstName:registerFirstName,lastName:RegisterLastName,email:registeremail,password:RegisterPassword,age:registerAge,country:RegisterCountry,gender:registerGender,role:"633093bb93da1efda1bded0e",phoneNumber:RegisterPhoneNumber}).then((response)=>{
    console.log(response.data)
    setRegisterMessage(response.data.message)
    navigate("/login")
  }).catch((err)=>{
    console.log(err.response.data.message)
    setRegisterMessage(err.response.data.message)
  })
}} >Register</button>
<div>{registerMessage}</div>

</div>
  </>
)};
export default Register;
