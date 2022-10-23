import React, { useState, useEffect } from "react";
import { userContext } from "../../App.js";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"

const updateProduct = () => {
  const userContext1 = useContext(userContext);
  let updateProduct = userContext1.updateProduct;
  let setUpdateProduct = userContext1.setUpdateProduct;
  let token = userContext1.token;
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editType, setEditType] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [newTitle, setNewTitle] = useState(updateProduct.title);
  const [newDescription, setNewDescription] = useState(updateProduct.description);
  const [newPrice, setNewPrice] = useState(updateProduct.price);
  const [newType, setNewType] = useState(updateProduct.type);
  const [newStatus, setNewStatus] = useState(updateProduct.status);
  const [newImage, setNewImage] = useState(updateProduct.image);
  const [newCity, setNewCity] = useState(updateProduct.city);
  const [newCarmake, setNewCarmake] = useState(updateProduct.carmake);
  const [newModel, setNewModel] = useState(updateProduct.model);
  const [newYear, setNewYear] = useState(updateProduct.year);
  const [newTransmission, setNewTransmission] = useState(updateProduct.transmission);
  const [newFuel, setNewFuel] = useState(updateProduct.fuel);
  const [newColor, setNewColor] = useState(updateProduct.color);
  const [newCondition, setNewCondition] = useState(updateProduct.condition);
  const [newKilometers, setNewKilometers] = useState(updateProduct.kilometers);
const [newLikes,setNewLikes] = useState(updateProduct.likes)



  const [updateMessage, setUpdateMessage] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editCarmake, setEditCarmake] = useState("");
  const [editModel, setEditModel] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editTransmission, setEditTransmission] = useState("");
  const [editFuel, setEditFuel] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editCondition, setEditCondition] = useState("");
  const [editKilometers, setEditKilometers] = useState("");
  const [editLikes,setEditLikes] = useState("")
  const navigate=useNavigate()

  return (
    <>
      <div className="update_product_container">
        <p>
          Image: {updateProduct.image}{" "}
          <button
            onClick={() => {
              setEditImage(
                <input
                  placeholder="New Image"
                  onChange={(e) => {
                    setNewImage(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editImage}
        </p>
        <p>
          Title: {updateProduct.title}{" "}
          <button
            onClick={() => {
              setEditTitle(
                <input
                  placeholder="New Title"
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editTitle}
        </p>
        <p>
          Description: {updateProduct.description}{" "}
          <button
            onClick={() => {
              setEditDescription(
                <input
                  placeholder="New Description"
                  onChange={(e) => {
                    setNewDescription(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editDescription}
        </p>
        <p>
          Price: {updateProduct.price}{" "}
          <button
            onClick={() => {
              setEditPrice(
                <input
                  placeholder="New price"
                  onChange={(e) => {
                    setNewPrice(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editPrice}
        </p>
        <p>
          Type: {updateProduct.type}{" "}
          <button
            onClick={() => {
              setEditType(
                <input
                  placeholder="New Type"
                  onChange={(e) => {
                    setNewType(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editType}
        </p>
        <p>
          City: {updateProduct.city}{" "}
          <button
            onClick={() => {
              setEditCity(
                <input
                  placeholder="New City"
                  onChange={(e) => {
                    setNewCity(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editCity}
        </p>
        <p>
          Carmake: {updateProduct.carmake}{" "}
          <button
            onClick={() => {
              setEditCarmake(
                <input
                  placeholder="New Carmake"
                  onChange={(e) => {
                    setNewCarmake(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editCarmake}
        </p>
        <p>
          Model: {updateProduct.model}{" "}
          <button
            onClick={() => {
              setEditModel(
                <input
                  placeholder="New Model"
                  onChange={(e) => {
                    setNewModel(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editModel}
        </p>
        <p>
          Year: {updateProduct.year}{" "}
          <button
            onClick={() => {
              setEditYear(
                <input
                  placeholder="New Year"
                  onChange={(e) => {
                    setNewYear(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editYear}
        </p>
        <p>
          Transmission: {updateProduct.transmission}{" "}
          <button
            onClick={() => {
              setEditTransmission(
                <input
                  placeholder="New Transmission"
                  onChange={(e) => {
                    setNewTransmission(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editTransmission}
        </p>
        <p>
          Fuel: {updateProduct.fuel}{" "}
          <button
            onClick={() => {
              setEditFuel(
                <input
                  placeholder="New Fuel"
                  onChange={(e) => {
                    setNewFuel(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editFuel}
        </p>
        <p>
          Color: {updateProduct.color}{" "}
          <button
            onClick={() => {
              setEditColor(
                <input
                  placeholder="New Color"
                  onChange={(e) => {
                    setNewColor(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editColor}
        </p>
        <p>
          Condition: {updateProduct.condition}{" "}
          <button
            onClick={() => {
              setEditCondition(
                <input
                  placeholder="New Condition"
                  onChange={(e) => {
                    setNewCondition(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editCondition}
        </p>
        <p>
          Kilometers: {updateProduct.kilometers}{" "}
          <button
            onClick={() => {
              setEditKilometers(
                <input
                  placeholder="New Kilometers"
                  onChange={(e) => {
                    setNewKilometers(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editKilometers}
        </p>

        <p>
          Status: {updateProduct.status}{" "}
          <button
            onClick={() => {
              setEditStatus(
                <input
                  placeholder="New Status"
                  onChange={(e) => {
                    setNewStatus(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editStatus}
        </p>
        <p>
          User: {updateProduct.userId.firstName} {updateProduct.userId.lastName}
        </p>
        <p>Likes: {updateProduct.likes}  <button
            onClick={() => {
              setEditLikes(
                <input
                  placeholder="New Likes"
                  onChange={(e) => {
                    setNewLikes(e.target.value);
                  }}
                ></input>
              );
            }}
          >
            Edit
          </button>{" "}
          {editLikes}
        </p>
      </div>

      <button className="save_update"
        onClick={() => {
          axios
            .put(
              `http://localhost:5000/product/${updateProduct._id}`,
              {
                image: newImage,
                title: newTitle,
                description: newDescription,
                price: newPrice,
                type: newType,
                status: newStatus,
              },
              {
                headers: {
                  authorization: "Bearer " + token,
                },
              }
            )
            .then((response) => {
              console.log(response.data.message);
              setUpdateMessage(response.data.message);
              navigate("/userProducts")
            })
            .catch((err) => {
              setUpdateMessage(err.message);
            });
        }}
      >
        Save Updated Values
      </button>
      {updateMessage}
    </>
  );
};

export default updateProduct;
