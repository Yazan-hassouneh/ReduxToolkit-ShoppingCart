import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
    count : 0
}

const cartSlice = createSlice({
    name : "CART",
    initialState,
    reducers : {
        Add : (state, action) => {
            {state.count++, state.products.push(action.payload)}
        },
        Remove : (state, action) => {
            {state.count--, state.products.pop(action.payload)}
        }   
    }
})


export default cartSlice.reducer
export const {Add, Remove} = cartSlice.actions