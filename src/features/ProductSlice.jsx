import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data : [],
    status : 'idle'
}

const productsSlice = createSlice({
    name : "PRODUCTS",
    initialState,
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = 'loading'
        }),
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        }),
        builder.addCase(getProducts.rejected, (state) => {
            state.status = 'failed',
            state.data = []
        })
    }
})

export default productsSlice.reducer

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return await response.data
})