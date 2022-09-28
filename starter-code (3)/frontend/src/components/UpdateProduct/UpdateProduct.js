import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const updateProduct = ()=>{
    const userContext1 = useContext(userContext);
    let updateProduct = userContext1.updateProduct;
    let setUpdateProduct = userContext1.setUpdateProduct;
    let token = userContext1.token;
    const [editTitle,setEditTitle]=useState("")
    const [editDescription , setEditDescription] = useState("")
    const [ editPrice , setEditPrice] = useState("")
    const [ editType , setEditType] = useState("")
const [editStatus,setEditStatus]=useState("")
const [newTitle,setNewTitle]=useState(updateProduct.title)
const [newDescription,setNewDescription] = useState(updateProduct.description)
const [newPrice,setNewPrice] = useState(updateProduct.price)
const [newType,setNewType] = useState(updateProduct.type)
const [newStatus,setNewStatus] = useState(updateProduct.status)
const [ updateMessage,setUpdateMessage]=useState("")


    return (
        <>

<div>
              <h1>
                Title: {updateProduct.title} <button onClick={()=>{
                    setEditTitle(<input placeholder="New Title" onChange={(e)=>{
                        setNewTitle(e.target.value)
                    }}></input>)
                   
                    
                }}>Edit</button> {editTitle}
              
              </h1>
              <h5>
                Description: {updateProduct.description} <button onClick={()=>{
                    setEditDescription(<input placeholder="New Description" onChange={(e)=>{
                        setNewDescription(e.target.value)
                    }}></input>)
                }}>Edit</button> {editDescription}
               
              </h5>
              <p>
                Price: {updateProduct.price} <button onClick={()=>{
                    setEditPrice(<input placeholder="New price" onChange={(e)=>{
                        setNewPrice(e.target.value)
                    }}></input>)
                }}>Edit</button> {editPrice}
             
              </p>
              <p>
                Type: {updateProduct.type} <button onClick={()=>{
                    setEditType(<input placeholder="New Type" onChange={(e)=>{
                        setNewType(e.target.value)
                    }}></input>)
                }} >Edit</button> {editType}
                
              </p>
              <p>
                Status: {updateProduct.status} <button onClick={()=>{
                    setEditStatus(<input placeholder="New Status" onChange={(e)=>{
                        setNewStatus(e.target.value)
                    }}></input>)
                }} >Edit</button> {editStatus}
                
              </p>
              <p>
                User: {updateProduct.userId.firstName} {updateProduct.userId.lastName}
              </p>
              <p>Likes: {updateProduct.likes}</p>
</div>
        
        <button onClick={()=>{
            axios.put(`http://localhost:5000/product/${updateProduct._id}`,{title:newTitle,description:newDescription,price:newPrice,type:newType,status:newStatus},{
                headers: {
                  authorization: "Bearer " + token,
                },
              }).then((response)=>{
                console.log(response.data.message)
               setUpdateMessage(response.data.message)

              }).catch((err)=>{
                setUpdateMessage(err.message)
              })
        }}>Save Updated Values
        </button>
        {updateMessage}
        
        
        
        </>
    )
}

export default updateProduct