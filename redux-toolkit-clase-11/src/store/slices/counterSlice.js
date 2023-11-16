import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count: 0
}

const counterReducer =  createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            return {...state, count: state.count + 1}
        },
        decrement: (state) => {
            return {...state, count: state.count - 1}
        },
        reset: () => {
            return initialState;
        },
    }
})

export const { increment, decrement, reset } = counterReducer.actions

export default counterReducer.reducer