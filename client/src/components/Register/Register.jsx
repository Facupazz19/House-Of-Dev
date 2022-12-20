import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Register/register.css";
import useInput from "../../hooks/useInput";

const Register = () => {
  const name = useInput();
  const lastName = useInput();
  const country = useInput();
  const city = useInput();
  const state = useInput();
  const phone = useInput();
  const password = useInput();
  const email = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        country: country.value,
        city: city.value,
        state: state.value,
        phone: phone.value,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <form className="container row g-3 containerReg" onSubmit={handleSubmit}>
      <label className="form-label">LastName</label>
      <input
        type="text"
        className="form-control"
        id="inputLastName"
        {...lastName}
        required
      />

      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        id="inputName"
        {...name}
        required
      />

      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="example@example.com"
          {...email}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          {...password}
          required
        />
      </div>
      <div className="col-12">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          required
          {...phone}
        />
      </div>
      <div className="col-12">
        <label className="form-label">Country</label>
        <input
          type="text"
          className="form-control"
          id="inputCountry"
          {...country}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          {...city}
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">State</label>
        <input
          type="text"
          className="form-control"
          id="inputState"
          {...state}
          required
        />
      </div>
      <div className="col-12"></div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Register;
