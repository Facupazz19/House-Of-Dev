import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data))
      .then(() => navigate("/home"))
      .catch((error) => console.log(error));
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleSubmit}>
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
          iniciar sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
