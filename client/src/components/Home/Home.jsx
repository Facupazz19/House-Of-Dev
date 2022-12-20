import React from "react";
import "../Home/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavs } from "../../store/user";

const Home = () => {
  const [property, setProperty] = useState([]);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property")
      .then((res) => setProperty(res.data));
  }, []);

  const handleAddFavorites = (id) => {
    axios
      .post("http://localhost:3001/api/property/addFavorites", {
        email: user.email,
        id: id,
      },{ withCredentials: true })
      .then((res) => dispatch(addToFavs(res.data)))
      .catch((error) => console.log(error));
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {property.map((property, i) => (
        <div className="col">
          <div className="card h-100">
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
                <button onClick={() => handleAddFavorites(property.id)}>
                  Add to Favorites
                </button>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
