import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { userContext } from "../../App.js";
import { useNavigate }from 'react-router-dom'
import { useContext } from "react";


const Google = () => {
  const [googleLoginInfo, setGoogleLoginInfo] = useState("");
  const [googleFirstName, setGoogleFirstName] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
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
const [code,setCode]=useState("")
  const [googleLastName, setGoogleLastName] = useState("");
const [decoded,setDecoded]=useState("")
  const [googleImage, setGoogleImage] = useState("");
  let googleButton = userContext1.googleButton
  
  let setGoogleButton =userContext1.setGoogleButton
  const navigate = useNavigate()
  return (
    <div className="googleLogin">
      <GoogleOAuthProvider  clientId="1051135409617-k2pttkrl0j8jtmh40184b9d1dm3vnetf.apps.googleusercontent.com">
        <GoogleLogin 
          onSuccess={(credentialResponse) => {
            var decoded1 = jwtDecode(credentialResponse.credential)
            console.log(decoded1)
               var firstName1=decoded1.given_name
          var email1 = decoded1.email
             var family_name1=decoded1.family_name
           var image1 = decoded1.picture
            
            setGoogleFirstName(firstName1)
            setGoogleEmail(email1)
            setGoogleLastName(family_name1)
            setGoogleImage(image1)
            console.log(decoded1)
            console.log(firstName1)
            console.log(family_name1)
            console.log(image1)
            console.log(email1)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />


      </GoogleOAuthProvider>
      <div className="login_button_google">
      <button className="login_button_google1" onClick={()=>{
         axios.post('http://localhost:5000/user/googleRegister',{
          image:googleImage,
          firstName: googleFirstName,
          lastName: googleLastName,
          email: googleEmail,
          password:"0",
          role:"633093bb93da1efda1bded0e",
        }).then((response)=>{
          console.log(response.data)
          setLoginMessage("login Success")
      setIsLoggedIn(true)
      setToken(response.data.token)
      localStorage.setItem("Token", JSON.stringify(response.data.token))
    localStorage.setItem("loggedIn",JSON.stringify(true))
      setUser(response.data.userId)
      localStorage.setItem("user1",JSON.stringify(response.data.userId))
      navigate("/dashboard")
      setGoogleButton(false)
          
          console.log(response);
          console.log("success");
        }).catch((err)=>{
          console.log(err);
        })

  
      }}>Login</button>
      </div>
     
    </div>

    
  );
};

export default Google;
