import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="flex-container">
      <nav className="navbar bg-light- fondoNavBar">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} alt="HouseOfDev" />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link buttons">En Venta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Alquiler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Agenda Tu Visita</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Nuestros Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Mi Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Nosotros</a>
            </li>
            <li>
              <a className="nav-link active buttons" aria-current="page">
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
