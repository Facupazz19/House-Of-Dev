import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../components/Propertys/AllPropertys.css";
import { Link, useParams } from "react-router-dom";

const AllPropertys = () => {
  const [property, setProperty] = useState([]);
  const id = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property")
      .then((res) => setProperty(res.data));
  }, []);

  return (
    <div>
      <div className="flex-card">
        {property.map((property, i) => (
          <div key={i}>
            <h1>
              <Link> {property.title} </Link>
            </h1>
            <div className="img-center">
              <img src={property.image} alt={property.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPropertys;
