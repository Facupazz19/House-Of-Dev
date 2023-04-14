import React, { useState } from "react";
import "../NavBar/NavBar.css";
import logo from "../../images/logo.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user";
import { useEffect } from "react";
import { userLogout } from "../../store/user";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const navigate = useNavigate();
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
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fondoNavBar">
      <div className="container-fluid fondoNavBar">
        <a className="navbar-brand" href="/">
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
          <form className="d-flex searchNav" role="search">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2 inputNav"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
            />
            <Link to={`/search/${search}`}>
              <button
                className="btn btn-outline-success buttonSearchNav"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
          <div className="navbar-nav">
            <a className="nav-link buttonsNav">On sale</a>
            <a className="nav-link buttonsNav">Renting</a>
            <a className="nav-link buttonsNav">About us</a>
            <a className="nav-link buttonsNav">Contact</a>
            <a className="nav-link buttonsNav" href="/profile">My profile</a>
            <a className="nav-link buttonsNav">Services</a>
          </div>
        </div>
        <a className="user-name">
          {user.admin ? (
            <div class="btn-group ">
              <button
                class="btn btn-secondary dropdown-toggle buttonDrop"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <ul class="dropdown-menu buttonDrop">
                <Link to={"/users"}>
                  <li>
                    <a class="dropdown-item">All users</a>
                  </li>
                </Link>
                <Link to={"/property/create"}>
                  <li>
                    <a class="dropdown-item">Create Property</a>
                  </li>
                </Link>
                <Link>
                  <li>
                    <a class="dropdown-item">More</a>
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <div className="btn-group">
              <button className="btn btn-secondary buttonDrop">
                {user.name ? <a>{user.name}</a> : <Link to={"/login"}>Login</Link> } 
              </button>
            </div>
          )}
        </a>
        <a className="user-name">
          {user.name ? (
            <button className="btn btn-secondary buttonLogout" onClick={logout}>
              Logout
            </button>
          ) : (
            ""
          )}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
