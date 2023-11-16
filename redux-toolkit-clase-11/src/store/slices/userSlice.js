import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: '',
    dni: ''
}

const userReducer =  createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.name =  action.payload.name;
            state.dni = action.payload.dni
        },
        deleteUser: () => {
            return initialState;
        },
    }
})

export const { addUser, deleteUser } = userReducer.actions

export default userReducer.reducer