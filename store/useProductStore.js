import { create } from "zustand";


const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    product: {},
    setProduct: (product) => set({ product }),
}))

export default useProductStore