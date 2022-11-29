import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const Card = () => {
  const { id } = useParams();
  const [property,setProperty] = useState({})

  useEffect(
    () => {
      axios
        .get(`http://localhost:3001/api/property/${id}`)
        .then((res) => setProperty(res.data));
    },
    /*    {
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
    }, */
    []
  );

  return (
     <div>
       <h1> {property.title} </h1>
      <div className="img-center">
        <img src={property.image} alt={property.description} />
      </div> 
    </div> 
  );
};

export default Card;
