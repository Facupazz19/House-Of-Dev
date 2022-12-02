import {createAction,createReducer} from "@reduxjs/toolkit"

export const deleteProperty = createAction("DELETE_PROPERTY")
export const setProperty = createAction("SET_PROPERTY")

const propertyReducer = createReducer({},{
    [deleteProperty]: (state, action) => ({}),
})

export default propertyReducer