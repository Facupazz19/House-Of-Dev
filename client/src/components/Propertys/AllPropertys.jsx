import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AllPropertys = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property")
      .then((res) => setProperty(res.data));
  }, []);

  return (
    <div>
      <div>
        {property.map((property, i) => (
          <div key={i}>
            <h1> {property.title} </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPropertys;
