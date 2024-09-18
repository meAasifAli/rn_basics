import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../store/productSlice'
import cartReducer from '../store/cartSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})