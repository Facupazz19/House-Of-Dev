import {createAction,createReducer} from "@reduxjs/toolkit"

export const setUser = createAction("SET_USER")
export const userLogout = createAction("USER_LOGOUT");

const userReducer = createReducer({},{
    [setUser]: (state,action) => action.payload,
    [userLogout]: (state, action) => ({}),

})

export default userReducer