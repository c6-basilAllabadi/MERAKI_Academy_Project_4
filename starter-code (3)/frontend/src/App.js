import "./App.css";
import {Link , Routes , Route} from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register";
import React , { useState, createContext } from "react";
import Dashboard from "./components/Dashboard";
import UserProducts from "./components/UserProducts";
export const userContext=createContext()
function App() {

  const [loginemail , setLoginEmail]=useState("")
  const [loginpassword , setLoginPassword] = useState("")
  const [dashboardstatus , setDashboardStatus] = useState(true)
  const [isLoggedIn,setIsLoggedIn]=useState(false) 
  const [token , setToken] = useState("")
  const [user , setUser]=useState("")
  const [userProducts ,setUserProducts]=useState("")

   return (
    <>
    <userContext.Provider value={{loginemail , setLoginEmail,loginpassword , setLoginPassword,dashboardstatus , setDashboardStatus,isLoggedIn,setIsLoggedIn,token , setToken,user , setUser,userProducts ,setUserProducts}}>
    <div className="App">
     <h2>{!isLoggedIn && <Link to="/login" onClick={()=>{
      setDashboardStatus(false)
     }}>Login</Link>}</h2>
     <h2>{!isLoggedIn && <Link to="/register" onClick={()=>{
      setDashboardStatus(false)
     }}>Register</Link>}</h2>
     {isLoggedIn && <h2> Logout</h2>}
     {dashboardstatus && <Dashboard/>}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/userProducts" element={<UserProducts/>}/>
      </Routes>
     
    </div>
    </userContext.Provider>

    </>
  );
}

export default App;
