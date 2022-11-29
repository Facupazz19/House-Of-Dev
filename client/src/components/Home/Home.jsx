import React from "react";
import "../Home/Home.css";
import {Link} from "react-router-dom"

const Home = () => {

  return (
    <div className="container home">
      <h1>Welcome to HouseOfDev!</h1>
      <div className="buttons">
        <button><Link to="/property/create">Agregar Nueva Propiedad</Link></button>
        <button><Link to="/property/change/">Editar Una Propiedad</Link></button>
        <button>Delete Property</button>
      </div>
    </div>
  );
};

export default Home;
