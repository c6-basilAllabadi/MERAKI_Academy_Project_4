import React, { useState ,useEffect} from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import axios from "axios"

const Dashboard = ()=>{
const [products , setProducts] = useState("")


    useEffect(() => {
        getAllProducts();
      }, []);
    
      const getAllProducts=()=>{
        axios
        .get('http://localhost:5000/product')
        .then((response) => {
          setProducts(response.data.products);
          console.log(products)
        })
        .catch((err) => {
          console.log(err);
        });
      }
    return (
        <>
        
        {/*products.map((elem,index)=>{
                return <div>
                    <h1>{elem.title}</h1>
                    <h5>{elem.description}</h5>
                    <p>{elem.price}</p>
                    <p>{elem.type}</p>
                    <p>{elem.status}</p>
                    <p>{elem.userId}</p>
                    <p>{elem.comments}</p>
                    <p>{elem.likes}</p>

                </div>
            })*/}
       
        </>
    )
}

export default Dashboard