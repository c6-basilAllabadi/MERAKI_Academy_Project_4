

import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { useNavigate }from 'react-router-dom'
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import  Search  from "../Search/index";





const FilterProducts = ()=>{

    const userContext1 = useContext(userContext)
    const navigate = useNavigate()
    let setDashboardStatus = userContext1.setDashboardStatus
    let setSearchStatus = userContext1.setSearchStatus
    let setToken = userContext1.setToken
    let token = userContext1.token;
    let setIsLoggedIn = userContext1.setIsLoggedIn
    let isLoggedIn = userContext1.isLoggedIn
    let searchStatus = userContext1.searchStatus
    let setProductType = userContext1.setProductType
    let setSearchWord = userContext1.setSearchWord
let setProducts = userContext1.setProducts
let setFilterprice=userContext1.setFilterprice
let setFilterStatus = userContext1.setFilterStatus
let setFilterType = userContext1.setFilterType
let filterPrice = userContext1.filterPrice
let filterStatus = userContext1.filterStatus
let fliterType=userContext1.fliterType
let filterCondition=userContext1.filterCondition
let setFilterCondition=userContext1.setFilterCondition
let filterYear=userContext1.filterYear
let setFilterYear=userContext1.setFilterYear
let filterCity=userContext1.filterCity
let setFilterCity=userContext1.setFilterCity
let filterTransmition =userContext1.filterTransmition
let setFilterTransmition=userContext1.setFilterTransmition
let filterFuel = userContext1.filterFuel
let setFilterFuel=userContext1.setFilterFuel
let setMoreInfoProduct = userContext1.setMoreInfoProduct;
let moreInfoProduct = userContext1.moreInfoProduct;
let favoritesProducts = userContext1.favoritesProducts;
let setFavoriteProducts = userContext1.setFavoriteProducts;
let arr10=[]
let user = userContext1.user;


let searchButtonStatus = userContext1.searchButtonStatus;
let setSearchButtonStatus = userContext1.setSearchButtonStatus;
let arr4;
let arr1;
let arr3;
let arr5;
let arr6;

const likedProducts=userContext1.likedProducts
let setLikedProducts= userContext1.setLikedProducts
let arr2 = userContext1.arr2;
let setarr2 = userContext1.setarr2;
let arr7 = userContext1.arr7;
let setarr7 = userContext1.setarr7;

const myFunction = () => {
let popup = document.getElementById("like");
popup.classList.toggle("show");
};
const myFunction1 = () => {
let popup = document.getElementById("favorite");
popup.classList.toggle("show");
};


const [ filteredProducts , setFilteredProducts]=useState("")
const [pagination, setPagination] = useState(10);
const getFilteredProducts =()=>{

    axios.get(`http://localhost:5000/product/1000`).then((response)=>{
      console.log(response)
        setFilteredProducts(response.data.products);
        console.log(response.data.products)
    }).catch((err)=>{
        console.log(err);
    })
} 
useEffect(()=>{
getFilteredProducts()
},[])
const getFavoritesProducts = () => {
  axios
    .get(`http://localhost:5000/favorite/`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      setFavoriteProducts(response.data.favorites[0].favorites);

      arr1 = response.data.favorites[0].favorites.map((elem, index) => {
        return elem._id;
      });
      setarr2(arr1);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getLikedProducts = () => {
  axios
    .get(`http://localhost:5000/product/like/get/${user}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      setLikedProducts(response.data);
      arr5 =
        likedProducts &&
        likedProducts.map((elem, index) => {
          return elem.product;
        });
      setarr7(arr5);
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  getFavoritesProducts();
}, [favoritesProducts]);
useEffect(() => {
  getLikedProducts();
}, [arr7, likedProducts])

arr10=filteredProducts
if(fliterType){arr10=arr10 && arr10.filter((elem,index)=>{
  return elem.type == fliterType 
})
}


if(filterStatus){arr10=arr10&&arr10.filter((elem,index)=>{
  return elem.status === filterStatus
})
}

if(filterCondition){arr10=arr10 && arr10.filter((elem,index)=>{
  return elem.condition=== filterCondition
})}

if(filterCity){arr10=arr10 && arr10.filter((elem,index)=>{
  return elem.city === filterCity
})}
if(filterTransmition){arr10=arr10 && arr10.filter((elem,index)=>{
  return elem.transmission === filterTransmition
})}
if(filterFuel){arr10=arr10 && arr10.filter((elem,index)=>{
  return elem.fuel === filterFuel
})}



    return (

        <>
        
        
        <div className="item_card_dashboard_container">
      {arr10 &&
        arr10.map((elem, index) =>{
         
    
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
              {arr2.includes(elem._id) && (
                  <button className="item_card_addToFavorite_dashboard">
                    <i className="fas fa-star"></i> Added to Favorite
                  </button>
                )}
                {!arr2.includes(elem._id) && (
                  <button
                    className="item_card_addToFavorite_dashboard"
                    onClick={() => {
                      !isLoggedIn && myFunction1();
                      !isLoggedIn && setTimeout(myFunction1, 8000);
                      axios
                        .post(
                          `http://localhost:5000/favorite/${elem._id}`,
                          {},
                          {
                            headers: {
                              authorization: "Bearer " + token,
                            },
                          }
                        )
                        .then((response) => {
                          arr4 = favoritesProducts.concat(elem);
                          console.log(arr4);
                          setFavoriteProducts(arr4);
                        })
                        .catch((err) => {
                          console.log(err.message);
                        });
                    }}
                  >
                    <i className="fas fa-star"></i> Add to Favorite{" "}
                  </button>
                )}

               {arr7.includes(elem._id) && (
                  <button  className="item_card_likes_dashboard">
                    <i className="fas fa-star"></i> Liked {elem.likes}
                  </button>
                )}
                

                {!arr7.includes(elem._id) && (
                <button
                  className="item_card_likes_dashboard"
                  onClick={() => {
                    !isLoggedIn && myFunction();
                    !isLoggedIn && setTimeout(myFunction, 8000);
                   
                          axios
                            .post(
                              "http://localhost:5000/product/like/",
                              { product: `${elem._id}`, liker: `${user}` },
                              {
                                headers: {
                                  authorization: "Bearer " + token,
                                },
                              }
                            )
                            .then((response) => {
                              console.log(response);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                          axios
                            .put(
                              `http://localhost:5000/product/${elem._id}`,
                              { likes: `${elem.likes + 1}` },
                              {
                                headers: {
                                  authorization: "Bearer " + token,
                                },
                              }
                            )
                            .then((response) => {
                              elem.likes = elem.likes + 1;
                            })
                            .catch((err) => {
                              console.log(err.message);
                            });}}>
                  <i className="fas fa-thumbs-up"></i>Like {elem.likes}
                </button>)}
              </div>
            );
          })}
        </div>
        
        </>
    )
}

export default FilterProducts