import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../store/productSlice'
import cartReducer from '../store/cartSlice'
import userReducer from '../store/userSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        user: userReducer
    }
})