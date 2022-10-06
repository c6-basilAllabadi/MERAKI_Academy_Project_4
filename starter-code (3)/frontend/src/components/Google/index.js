import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Google = () => {
  const [googleLoginInfo, setGoogleLoginInfo] = useState("");
  const [googleFirstName, setGoogleFirstName] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");

const [code,setCode]=useState("")
  const [googleLastName, setGoogleLastName] = useState("");
const [decoded,setDecoded]=useState("")
  const [googleImage, setGoogleImage] = useState("");

  return (
    <div className="googleLogin">
      <GoogleOAuthProvider clientId="1051135409617-k2pttkrl0j8jtmh40184b9d1dm3vnetf.apps.googleusercontent.com">
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
      <button onClick={()=>{
         axios.post('http://localhost:5000/user/googleRegister',{
          image:googleImage,
          firstName: googleFirstName,
          lastName: googleLastName,
          email: googleEmail,
          role:"633093bb93da1efda1bded0e",
        }).then((response)=>{
          console.log(response.data)
          
          console.log(response);
          console.log("success");
        }).catch((err)=>{
          console.log(err);
        })

  
      }}>Login</button>
     
    </div>

    
  );
};

export default Google;
