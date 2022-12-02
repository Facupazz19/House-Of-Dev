import React from "react";
import "../Home/Home.css";
import { Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property")
      .then((res) => setProperty(res.data));
  }, []);

  return (
    <div className="container flex-container">
      {property.map((property, i) => (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card image">
              <img src={property.image} className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> <Link to={`/property/change/${property.id}`}>{property.title}</Link> </h5>
                <p class="card-text">{property.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
