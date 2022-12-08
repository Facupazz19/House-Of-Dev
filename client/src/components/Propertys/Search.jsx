import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const { category } = useParams();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/property/search/${category}`, {
        withCredentials: true,
      })
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {property.map((property, i) => (
        <div class="col">
          <div class="card h-100">
            <img src={property.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> {property.title} </h5>
              <p class="card-text">
                {property.description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"> <Link to={`/property/${property.id}`}><button>Ver propiedad</button></Link> </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
