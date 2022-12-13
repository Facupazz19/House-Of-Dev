import React from "react";
import "../Home/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/user";

const Home = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property")
      .then((res) => setProperty(res.data));
  }, []);

 const fav = () => {
    axios
      .get("http://localhost:3001/api/users/addfavorites")
      .then((res) => setFavorites(res.data));
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {property.map((property, i) => (
        <div class="col">
          <div class="card h-100">
            <img
              src={property.image}
              className="card-img-top imageCard"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {property.title} </h5>
              <p className="card-text">{property.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <Link to={`/property/${property.id}`}>
                  <button>View Property</button>
                </Link>
                <Link to={`/users/favorites/${property.id}`}>
                  <button>Add to Favorites</button>
                </Link>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
