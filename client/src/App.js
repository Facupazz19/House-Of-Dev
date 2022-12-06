import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home"
import PropertyCreate from "./components/Propertys/PropertyCreate";
import Property from "./components/Propertys/Property";
import ChangeProperty from "./components/Propertys/ChangeProperty";
import DeleteProperty from "./components/Propertys/DeleteProperty";
import Users from "./components/ViewAdmin/Users";
import DeleteUser from "./components/ViewAdmin/DeleteUser";
import Search from "./components/Propertys/Search";

const App = () => {

  return (
    <>
    <NavBar />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/property/create" element={<PropertyCreate />} />
        <Route path="/property/change/:id" element={<ChangeProperty />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/property/delete/:id" element={<DeleteProperty />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/delete/:id" element={<DeleteUser/>} />
        <Route path="/search/:category" element={<Search/>} />
      </Routes>
    </>
  );
};

export default App;
