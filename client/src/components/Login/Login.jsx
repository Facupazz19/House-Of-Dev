import { React, useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

const Login = () => {
  const password = useInput();
  const email = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(setUser(res.data)))
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="px-4 py-3 container loginContainer "
      onClick={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          onChange={handleChangeEmail}
          type="email"
          className="form-control"
          id="exampleDropdownFormEmail1"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={handleChangePassword}
          type="password"
          className="form-control"
          id="exampleDropdownFormPassword1"
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck"
          />
          <label className="form-check-label">Remember me</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <div className="dropdown-divider"></div>
      <Link to={"/register"}>New around here? Sign up</Link>
      <a className="dropdown-item" href="#">
        Forgot password?
      </a>
    </form>
  );
};

export default Login;
