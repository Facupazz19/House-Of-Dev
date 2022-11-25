import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="flex-container">
      <div>
        <h1>Registrate para poder iniciar sesion</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Nombre:</label>
              <input
                type="text"
                value={name}
                required
                onChange={handleChangeName}
              />
            </li>
            <li>
              <label>Apellido:</label>
              <input
                type="text"
                id="mail"
                value={lastName}
                required
                onChange={handleChangeLastName}
              />
            </li>
            <li>
              <label>Correo Electronico:</label>
              <input
                id="email"
                type="text"
                email={email}
                required
                onChange={handleChangeEmail}
              />
            </li>
            <li>
              <label>Contraseña:</label>
              <input
                type="password"
                id="password"
                password={password}
                required
                onChange={handleChangePassword}
              />
            </li>
            <li>
              <label>Ciudad:</label>
              <input
                type="text"
                id="city"
                city={city}
                required
                onChange={handleChangeCity}
              />
            </li>
            <li>
              <label>Pais:</label>
              <input
                type="text"
                id="country"
                country={country}
                required
                onChange={handleChangeCountry}
              />
            </li>
            <li>
              <label>Provincia:</label>
              <input
                type="text"
                id="state"
                state={state}
                required
                onChange={handleChangeState}
              />
            </li>
            <li>
              <label>Telefono:</label>
              <input
                type="tel"
                id="phone"
                phone={phone}
                required
                onChange={handleChangePhone}
              />
            </li>
            <button
              style={{
                color: "black",
                borderColor: "black",
                fontFamily: "Roboto",
                fontWeight: "bold",
                borderRadius: "200px",
              }}
              type="submit"
              variant="text"
              size="medium"
            >
              Register
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Register;
