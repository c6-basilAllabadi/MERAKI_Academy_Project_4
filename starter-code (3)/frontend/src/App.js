import "./App.css";
import {Link , Routes , Route} from "react-router-dom"
import Login from "./components/Login"
import React , { useState, createContext } from "react";
export const userContext=createContext()
function App() {

  const [email , setEmail]=useState("")
  const [password , setPassword] = useState("")
  return (
    <>
    <userContext.Provider value={{email , setEmail,password , setPassword}}>
    <div className="App">
     <Link to="/login">login</Link>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
    </userContext.Provider>

    </>
  );
}

export default App;
