import { createAction, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const setUser = createAction("SET_USER");
export const userLogout = createAction("USER_LOGOUT");
export const addToFavs = createAction("ADD_TO_FAVORITES");
export const removeFav = createAction("REMOVE_FAV")

const initialState = {
  id: null,
  email: null,
  admin: null,
  name: null,
  lastName: null,
  properties: [],
};

const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
  [userLogout]: (state, action) => ({}),
  [addToFavs]: (state, action) => {
    if ((!state.id)) {
      message.error("Error: check if you are logged in");
      return state;
    }
    if (state.properties.find((fav) => fav.id === action.payload.id)) {
      message.error("error:this property was already added to favorites");
      return state;
    }

    message.success("Property added to favorites");
    return state.properties.push(action.payload);
  },
  [removeFav]: (state, action) => {
    message.success(`Flight removed from favorites`);
    return {
      ...state,
      properties: state.properties.filter((fav) => fav.id !== action.payload.id),
    };
  }
});

export default userReducer;
