import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";

const ChangeProperty = () => {
  const [property, setProperty] = useState({});

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

  const { id } = useParams();
  const ID = Number(id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/property/change/${ID}`,
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
      .then((res) => setProperty(res.data))
      .then(() => navigate("/"));
  };

  console.log(property)

  return (
    <div>
      <h1>Editar una Propiedad</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input value={property.title} type="text" {...title} />
          </label>
          <label>
            Description
            <input type="text" {...description} />
          </label>
          <label>
            Environments
            <input type="number" {...environments} />
          </label>
          <label>
            Category
            <input type="text" {...category} />
          </label>
          <label>
            Price
            <input type="number" {...price} />
          </label>
          <label>
            Country
            <input type="text" {...country} />
          </label>
          <label>
            City
            <input type="text" {...city} />
          </label>
          <label>
            State
            <input type="text" {...state} />
          </label>
          <label>
            Available
            <input type="text" {...available} />
          </label>
          <label>
            Image
            <input type="text" {...image} />
          </label>
          <button>Editar</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeProperty;
