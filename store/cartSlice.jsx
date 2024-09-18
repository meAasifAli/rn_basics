import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1
            } else {
                state.cartItems.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity -= 1
            }

        }
    }
})

export const { addToCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer