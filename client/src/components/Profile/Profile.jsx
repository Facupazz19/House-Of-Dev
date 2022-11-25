import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Nombre:{user.name}</h1>
    </div>
  );
};

export default Profile;