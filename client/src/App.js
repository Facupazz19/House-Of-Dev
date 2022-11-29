import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home"
import Property from "./components/Propertys/PropertyCreate";
import AllPropertys  from "./components/Propertys/AllPropertys";
import Card from "./components/Propertys/Card";
import ChangeProperty from "./components/Propertys/ChangeProperty";


const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/property/create" element={<Property />} />
        <Route path="/" element={<AllPropertys />} />
        <Route path="/property/change/:id" element={<ChangeProperty />} />
        <Route path="/property/:id" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
