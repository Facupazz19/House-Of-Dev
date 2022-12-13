import {createAction,createReducer} from "@reduxjs/toolkit"

export const setUser = createAction("SET_USER")
export const userLogout = createAction("USER_LOGOUT");
export const setFavorites = createAction("SET_FAVORITES");


const userReducer = createReducer({},{
    [setUser]: (state,action) => action.payload,
    [userLogout]: (state, action) => ({}),
    [setFavorites]: (state, action) => {state.favorites.push(action.payload)},

})

export default userReducer