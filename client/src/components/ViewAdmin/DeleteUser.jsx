import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const DeleteUser = () => {
  const { id } = useParams();
  const [deleteUser, setDeleteUser] = useState({});

  useEffect(() => {
    axios
      .delete(`http://localhost:3001/api/users/delete/${id} `, {
        withCredentials: true,
      })
      .then((res) => setDeleteUser(res.data))
      .catch((error) => console.log(error));
  }, []);

  return  <Navigate to={"/users"}/>;
};
export default DeleteUser;
