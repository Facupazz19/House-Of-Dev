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
              <a className="nav-link buttons">On sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Rental</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Date</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">My profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link buttons">About us</a>
            </li>
            <li>
              <a className="nav-link active buttons" aria-current="page">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
