import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../images/logo.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user";
import { useEffect } from "react";
import { userLogout } from "../../store/user";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => console.log(error));
  }, []);

  const logout = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => dispatch(userLogout(res.data)))
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fondoNavBar">
      <div className="container-fluid fondoNavBar">
        <a className="navbar-brand">
          <img className="card-navBar" src={logo} alt="logoHouseOfDev" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link buttonsNav">On sale</a>
            <a className="nav-link buttonsNav">Renting</a>
            <a className="nav-link buttonsNav">About us</a>
            <a className="nav-link buttonsNav">Contact</a>
            <a className="nav-link buttonsNav">
              My profile
            </a>
            <a className="nav-link buttonsNav">Services</a>
          </div>
        </div>
        <a className="user-name">
          {user.name ? user.name: <Link to={"/login"}>Login</Link>}
        </a>
        <a className="user-name">
          {user.name ? <button className="buttonLogout" onClick={logout}>Logout</button>: "" }
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
