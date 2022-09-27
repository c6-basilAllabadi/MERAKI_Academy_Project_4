import "./App.css";
import {Link , Routes , Route} from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register";
import React , { useState, createContext } from "react";
import Dashboard from "./components/Dashboard";
export const userContext=createContext()
function App() {

  const [loginemail , setLoginEmail]=useState("")
  const [loginpassword , setLoginPassword] = useState("")
  return (
    <>
    <userContext.Provider value={{loginemail , setLoginEmail,loginpassword , setLoginPassword}}>
    <div className="App">
     <h2><Link to="/login">Login</Link></h2>
     <h2><Link to="/register">Register</Link></h2>
   
      
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
     
    </div>
    </userContext.Provider>

    </>
  );
}

export default App;
