import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/user";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}`,{ withCredentials: true })
      .then((res) => dispatch(setUser(res.data)))
      .catch(error => console.log(error))
  }, []);

  

  return (

    <div>
      <h1>hola</h1>
    </div>

  );
};

export default Profile;
