import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyCreate = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [environments, setEnvironments] = useState(0);
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/property/create",
        {
          title: title,
          category: category,
          state: state,
          country: country,
          description: description,
          environments: environments,
          price: price,
          city: city,
          available: available,
          image: image,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeEnvironments = (e) => {
    setEnvironments(e.target.value);
  };
  const handleChangeState = (e) => {
    setState(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const handleChangeAvailable = (e) => {
    setAvailable(e.target.value);
  };

  return (
    <div>
      <h1>Crear una Propiedad</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" onChange={handleChangeTitle} required />
          </label>
          <label>
            Description
            <input type="text" onChange={handleChangeDescription} required />
          </label>
          <label>
            Environments
            <input type="number" onChange={handleChangeEnvironments} required />
          </label>
          <label>
            Category
            <input type="text" onChange={handleChangeCategory} required />
          </label>
          <label>
            Price
            <input type="number" onChange={handleChangePrice} required />
          </label>
          <label>
            Country
            <input type="text" onChange={handleChangeCountry} required />
          </label>
          <label>
            City
            <input type="text" onChange={handleChangeCity} required />
          </label>
          <label>
            State
            <input type="text" onChange={handleChangeState} required />
          </label>
          <label>
            Available
            <input type="text" onChange={handleChangeAvailable} required />
          </label>
          <label>
            Image
            <input type="text" onChange={handleChangeImage} required />
          </label>
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCreate;
