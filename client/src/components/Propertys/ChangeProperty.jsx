import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ChangeProperty = () => {
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
  const [property, setProperty] = useState({});
  const { id } = useParams();
  const ID = Number(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/property/change/${ID}`,
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
      .then((res) => setProperty(res.data));
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
      <h1>Editar una Propiedad</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" onChange={handleChangeTitle} />
          </label>
          <label>
            Description
            <input type="text" onChange={handleChangeDescription} />
          </label>
          <label>
            Environments
            <input type="number" onChange={handleChangeEnvironments} />
          </label>
          <label>
            Category
            <input type="text" onChange={handleChangeCategory} />
          </label>
          <label>
            Price
            <input type="number" onChange={handleChangePrice} />
          </label>
          <label>
            Country
            <input type="text" onChange={handleChangeCountry} />
          </label>
          <label>
            City
            <input type="text" onChange={handleChangeCity} />
          </label>
          <label>
            State
            <input type="text" onChange={handleChangeState} />
          </label>
          <label>
            Available
            <input type="text" onChange={handleChangeAvailable} />
          </label>
          <label>
            Image
            <input type="text" onChange={handleChangeImage} />
          </label>
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeProperty;
