import React, { useState ,useEffect} from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import {Link , Routes , Route} from "react-router-dom"
import axios from "axios"

const Dashboard = ()=>{
const [products , setProducts] = useState("")

const getAllProducts=()=>{
    axios
    .get('http://localhost:5000/product')
    .then((response) => {
    console.log(response.data.products)
      setProducts(response.data.products);
      console.log(products)
    })
    .catch((err) => {
      console.log(err);
    });
  }

    useEffect(() => {
        getAllProducts();
      }, []);
    
      
    return (
        <>
        <Link to="/userProducts">user products</Link>
        {products  && products.map((elem,index)=>{
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
       
        </>
    )
}

export default Dashboard