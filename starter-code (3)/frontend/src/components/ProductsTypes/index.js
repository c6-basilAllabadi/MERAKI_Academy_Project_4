import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductsTypes = ()=>{
    const userContext1 = useContext(userContext);
    let productType=userContext1.productType
    let setProductType = userContext1.setProductType
    const [typeProducts,setTypeProducts] = useState("")

    const getTypesProducts = () => {
        axios
          .get(`http://localhost:5000/product/type/${productType}`)
          .then((response) => {
            setTypeProducts(response.data.products);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getTypesProducts();
      }, []);
    
    return (

        <>
        {typeProducts &&
        typeProducts.map((elem, index) => {
          return (
            <div key = {index}>
              <h1>Title: {elem.title}</h1>
              <h5>Description: {elem.description}</h5>
              <p>Price: {elem.price}</p>
              <p>Type: {elem.type}</p>
              <p>Status: {elem.status}</p>
              <p>
                User: {elem.userId.firstName} {elem.userId.lastName}
              </p>

              <p>Likes: {elem.likes}</p>
            </div>
          );
        })}
        
        
        
        
        </>
    )

}



export default ProductsTypes