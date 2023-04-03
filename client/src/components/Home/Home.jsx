import React from "react";
import "../Home/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavs } from "../../store/user";

const Home = () => {
  const [property, setProperty] = useState([]);
  const [environments, setEnvironments] = useState("")


  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log(property)

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property/")
      .then((res) => setProperty(res.data));
  }, []);


  const handleAddFavorites = (id) => {
    axios
      .post(
        "http://localhost:3001/api/property/addFavorites",
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(addToFavs(res.data)))
      .catch((error) => console.log(error));
  };

  const handleFilterPrice = () => {
    axios
      .post(
        "http://localhost:3001/api/property/filter/price",
        { min: 1000, max: 2000 },
        { withCredentials: true }
      )
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));

  };

  const handleFilterPrices = () => {
    axios
      .post(
        "http://localhost:3001/api/property/filter/price",
        { min: 2000, max: 5000 },
        { withCredentials: true }
      )
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));
  };

  const handleFilterEnvironments = (e) => {
    e.preventDefault()
    axios
      .get(
        `http://localhost:3001/api/property/filter/${environments}`,
        { withCredentials: true }
      )
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <form onSubmit={handleFilterEnvironments} className="row g-3 input-filter">
        <div className="col-auto ">
          <label for="inputFilter" class="visually-hidden"></label>
          <input value={environments} onChange={(e) => setEnvironments(e.target.value)} type="text" class="form-control" id="inputFilter" placeholder="Filter by environments" required />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Filter</button>
        </div>
      </form>
      <div className="container filter-price">
        <h4>Filter by price:</h4>
        <button className="padding-button" onClick={handleFilterPrice}> $1000-$2000 </button>
        <button className="padding-button" onClick={handleFilterPrices}> $2000-$5000 </button>
      </div>
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
    </div>
  );
};

export default Home;
