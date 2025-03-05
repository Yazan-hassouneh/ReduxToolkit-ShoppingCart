import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import productsReducer from "../features/ProductSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productsReducer
    }
})