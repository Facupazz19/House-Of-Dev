import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Register/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        country: country,
        city: city,
        state: state,
        phone: phone,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <form className="container row g-3 containerReg" onSubmit={handleSubmit}>
      <label className="form-label">
        LastName
      </label>
      <input
        type="text"
        className="form-control"
        id="inputLastName"
        placeholder="Aguirre"
        required
        onChange={handleChangeLastName}
      />

      <label className="form-label">
        Name
      </label>
      <input
        type="tel"
        className="form-control"
        id="inputName"
        placeholder="Fabian"
        required
        onChange={handleChangeName}
      />

      <div className="col-md-6">
        <label className="form-label">
          Email
        </label>
        <input
          onChange={handleChangeEmail}
          type="email"
          className="form-control"
          placeholder="example@example.com"
          required
        />
      </div>
      <div className="col-md-6">
        <label  className="form-label">
          Password
        </label>
        <input
          onChange={handleChangePassword}
          type="password"
          className="form-control"
          id="inputPassword4"
          placeholder="Password"
          required
        />
      </div>
      <div className="col-12">
        <label className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="362434532"
          required
          onChange={handleChangePhone}
        />
      </div>
      <div className="col-12">
        <label className="form-label">
          Country
        </label>
        <input
          onChange={handleChangeCountry}
          type="text"
          className="form-control"
          id="inputCountry"
          placeholder="Argentina"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">
          City
        </label>
        <input
          onChange={handleChangeCity}
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="Resistencia"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">
          State
        </label>
        <input
          onChange={handleChangeState}
          type="text"
          className="form-control"
          id="inputState"
          placeholder="Buenos Aires"
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
