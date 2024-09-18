import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    product: {},
}

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const { setProducts, setProduct } = productSlice.actions
export default productSlice.reducer