import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: 'dark',
}

const themeReducer =  createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        darkTheme: () => {
            return initialState;
        },
        lightTheme: () => {
            return {value: 'light'}
        },
        
    }
})

export const { darkTheme, lightTheme } = themeReducer.actions

export default themeReducer.reducer