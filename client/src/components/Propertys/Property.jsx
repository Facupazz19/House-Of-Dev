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
<div className="container oneProperty">
  {user.admin ? <div className="card">
  <img src={property.image} className="card-img-top imageCard" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {property.title} </h5>
    <p className="card-text"> {property.description} </p>
    <Link to={`/property/change/${property.id}`}><button>Editar Propiedad</button></Link>
    <Link to={`/property/delete/${property.id}`}><button>Eliminar Propiedad</button></Link>
  </div>
</div> : <div className="card">
  <img src={property.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{property.title}</h5>
    <p className="card-text"> {property.description} </p>
    <a href="#" className="btn btn-primary">Reservar cita</a>
  </div>
</div>}
</div>
  )
};

export default Property;
