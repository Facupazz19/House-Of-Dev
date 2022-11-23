import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex-container">
    <nav class="navbar bg-light- fondoNavBar">
      <div class="container">
        <a class="navbar-brand">
          <img src={logo} alt="HouseOfDev" />
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item "></li>
          <li class="nav-item">
            <a class="nav-link buttons">En Venta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Alquiler</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Agenda Tu Visita</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Nuestros Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Mi Perfil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Nosotros</a>
          </li>
          <li>
            <a class="nav-link active buttons" aria-current="page">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
