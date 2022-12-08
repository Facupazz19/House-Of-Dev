import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

const PropertyCreate = () => {
  const navigate = useNavigate();

  const title = useInput();
  const category = useInput();
  const country = useInput();
  const city = useInput();
  const state = useInput();
  const price = useInput();
  const environments = useInput();
  const image = useInput();
  const available = useInput();
  const description = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/property/create",
        {
          title: title.value,
          category: category.value,
          state: state.value,
          country: country.value,
          description: description.value,
          environments: environments.value,
          price: price.value,
          city: city.value,
          available: available.value,
          image: image.value,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Crear una Propiedad</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" {...title} required />
          </label>
          <label>
            Description
            <input type="text" {...description} required />
          </label>
          <label>
            Environments
            <input type="number" {...environments} required />
          </label>
          <label>
            Category
            <input type="text" {...category} required />
          </label>
          <label>
            Price
            <input type="number" {...price} required />
          </label>
          <label>
            Country
            <input type="text" {...country} required />
          </label>
          <label>
            City
            <input type="text" {...city} required />
          </label>
          <label>
            State
            <input type="text" {...state} required />
          </label>
          <label>
            Available
            <input type="text" {...available} required />
          </label>
          <label>
            Image
            <input type="text" {...image} required />
          </label>
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCreate;
