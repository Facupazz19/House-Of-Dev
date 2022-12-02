import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/user";

const Property = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/property/${id}`,{ withCredentials: true })
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {user.admin ? 
        <div>
          <h1> {property.title}</h1>
          <img src={property.image} alt="imagen de una propiedad" />

          <button><Link to={`/property/change/${id}`} >Editar</Link></button>
          <button> <Link to={`/property/delete/${id}`}>Eliminar Propiedad</Link> </button>
        </div>
       :
        <div>
          <h2> {property.title} </h2>
          <img src={property.image} alt="imagen de una propiedad" />
        </div>
      }
    </div>
  );
};

export default Property;
