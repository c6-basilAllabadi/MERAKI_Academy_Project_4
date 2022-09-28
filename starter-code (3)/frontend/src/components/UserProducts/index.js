import React, { useState ,useEffect} from "react";
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
    let token =userContext1.token
    let setToken = userContext1.setToken
    let user =userContext1.user
    let setUser=userContext1.setUser
    let userProducts=userContext1.userProducts
    let setUserProducts=userContext1.setUserProducts
    const [loginMessage,setLoginMessage]=useState("")
    const [newProductTitle,setNewProductTitle]=useState("")
    const [newProductDescription,setNewProductDescription]=useState("")
    const [newProductPrice,setNewProductPrice]=useState("")
    const [newProductType,setNewProductType]=useState("")
    const [addNewProductMessage,setAddNewProductMessage]=useState("")

    const navigate = useNavigate()


    const getUserProducts=()=>{
      axios
      .get(`http://localhost:5000/product/searchUser/${user}`)
      .then((response) => {
      console.log(response.data)
      setUserProducts(response.data.products)
      
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
      useEffect(() => {
        getUserProducts();
        }, []);
      
    return (
        <>
        {userProducts  && userProducts.map((elem,index)=>{
                return <div>
                    <h1>Title: {elem.title}</h1>
                    <h5>Description: {elem.description}</h5>
                    <p>Price: {elem.price}</p>
                    <p>Type: {elem.type}</p>
                    <p>Status: {elem.status}</p>
                    <p>User: {elem.userId.firstName} {elem.userId.lastName}</p>
                
                    <p>Likes: {elem.likes}</p>

                </div>
            })}

            <div>add new product</div>
            <input placeholder="Title" type="text" onChange={(e)=>{
              setNewProductTitle(e.target.value)

            }}></input>
            <input placeholder="Description" type="text" onChange={(e)=>{
              setNewProductDescription(e.target.value)

            }}></input>
            <input placeholder="Price" type="number" onChange={(e)=>{
              setNewProductPrice(e.target.value)

            }}></input>
            <input placeholder="Type" type="text" onChange={(e)=>{
              setNewProductType(e.target.value)

            }}></input>
            <button onClick={()=>{
              axios.post("http://localhost:5000/product/",{title:newProductTitle,description:newProductDescription,price:newProductPrice,type:newProductType,status:"in stock",userId:user,likes:0},{
                headers: {
                  authorization: 'Bearer ' + token
                }
              }).then((response)=>{
                setAddNewProductMessage(response.data.message)
                

              }).catch((err))
              setAddNewProductMessage(err.response.data.message)

            }}>Add New Product</button>
            {addNewProductMessage}
          
        
        
        
        </>
    )
  }

  export default UserProducts