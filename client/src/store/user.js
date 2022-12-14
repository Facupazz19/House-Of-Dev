import {createAction,createReducer} from "@reduxjs/toolkit"

export const setUser = createAction("SET_USER")
export const userLogout = createAction("USER_LOGOUT");
export const addToFavs = createAction("ADD_TO_FAVORITES");



const userReducer = createReducer({},{
    [setUser]: (state,action) => action.payload,
    [userLogout]: (state, action) => ({}),
    [addToFavs]: (state, action) => {
        if (!state.id) {
          message.error(`Error: check if you are logged in `);
          return state;
        }
        if (state.favorites.find((fav) => fav.id === action.payload.id)) {
          message.error(`error:this property was already added to favorites`);
          return state;
        }
    
        message.success(`Property added to favorites`);
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

})

export default userReducer