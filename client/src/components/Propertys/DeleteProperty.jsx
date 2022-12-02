import React from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProperty } from "../../store/property";


const DeleteProperty = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  axios
    .delete(`http://localhost:3001/api/property/delete/${id}`, {
      withCredentials: true,
    })
    .then((res) => dispatch(deleteProperty(res.data)))
    .catch((error) => console.log(error));

  return <Navigate to={"/home"}/>
};

export default DeleteProperty