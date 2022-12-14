import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/addFavorites", {
        withCredentials: true,
      })
      .then((res) => dispatch(favorites(res.data)))
      .catch((error) => console.log(error));
  }, []);
 return
};
