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
      .get(`http://localhost:3001/api/users/${id}`)
      .then((res) => dispatch(setUser(res.data)));
  }, []);

  return (

    <div>
      {user.admin === true ? <h1>ERES ADMIN</h1> : <h1>NO ERES ADMIN RAJA DE ACA POBRE</h1>}
    </div>

  );
};

export default Profile;
