
import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./style.css"

const Search = ()=>{
    const userContext1 = useContext(userContext)
    let searchWord= userContext1.searchWord
    let setSearchWord = userContext1.setSearchWord
    let searchProducts=userContext1.searchProducts
    let setSearchProducts = userContext1.setSearchProducts
    let favoritesProducts = userContext1.favoritesProducts
    let setFavoriteProducts = userContext1.setFavoriteProducts
    const [addtoFavoriteButton ,setAddtoFavoriteButton] = useState("Add to Favorite")
    let setMoreInfoProduct =userContext1.setMoreInfoProduct
  let moreInfoProduct = userContext1.moreInfoProduct
  let searchButtonStatus  = userContext1.searchButtonStatus
  let setSearchButtonStatus = userContext1.setSearchButtonStatus
    let arr1
    const[arr2,setarr2]=useState("")
    const navigate=useNavigate()

    const getSearchProducts = ()=>{
        axios
        .get(`http://localhost:5000/product/search/${searchWord}`)
        .then((response) => {
          setSearchProducts(response.data.products);
          console.log(response.data.products)
          
     } ).catch((err)=>{
        console.log(err.message)
     })}

     useEffect(()=>{
        getSearchProducts()

     },[searchButtonStatus])

    return (

      <>
        <div className="item_card_dashboard_container">
      {searchProducts &&
        searchProducts.map((elem, index) =>{
           console.log(elem)
          const check =()=>{if(arr2.indexOf(elem._id)>=0){
           return setAddtoFavoriteButton("added to faorite");
           
       }};
    
      
          return (
            
            <div className ="item_card_dashboard" key ={index}>
              <img src={elem.image} className="item_card_image_dashboard"></img>
              <p className="item_card_title_dashboard" onClick={()=>{
                setMoreInfoProduct(elem)
                navigate("/moreInfo")
              }}>{elem.title}</p>
              <p className="item_card_price_dashboard">{elem.price} $</p>
              <p className="item_card_city_dashboard"> {elem.city}</p>
              <p className="item_card_carmake_dashboard"> {elem.type} | {elem.carmake} | {elem.model} | {elem.year}</p>
              <img src ={elem.userId.image} className="item_card_photo_dashboard"></img>
              <p className="item_card_userName_dashboard">
              {elem.userId.firstName} {elem.userId.lastName}</p>
              {arr2.includes(elem._id)&&<button className="item_card_addToFavorite_dashboard" onClick={()=>{
                    
                    axios.post(`http://localhost:5000/favorite/${elem._id}`,{},{
                      headers: {
                        authorization: "Bearer " + token,
                      }}).then((response)=>{
                      console.log(response.data.message)
                      
                    }).catch((err)=>{
                      console.log(err.message)
                    })
                  }}><i class='fas fa-star' ></i> Added to Favorite</button>}
                  {!arr2.includes(elem._id)&&<button className="item_card_addToFavorite_dashboard" onClick={()=>{
                  
                    axios.post(`http://localhost:5000/favorite/${elem._id}`,{},{
                      headers: {
                        authorization: "Bearer " + token,
                      }}).then((response)=>{
                      console.log(response.data.message)
                      
                    }).catch((err)=>{
                      console.log(err.message)
                    })
                  }}><i className='fas fa-star' ></i> Add to Favorite</button>}
        
        <button className="item_card_likes_dashboard" onClick={()=>{
          axios.put(`http://localhost:5000/product/${elem._id}`,{likes:`${elem.likes+1}`},{
            headers: {
              authorization: "Bearer " + token,
            },
          }).then((response)=>{
            console.log(response)
          }).catch((err)=>{
            console.log(err)
          })
        }}><i className='fas fa-thumbs-up'></i> Like </button>
            </div>
          );
        })}
        </div>
</>)}
       
       export default Search