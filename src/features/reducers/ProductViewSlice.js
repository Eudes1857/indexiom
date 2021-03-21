import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    view: []
}

const ProductViewSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToProductView : (state, action) =>{
            state.view.push(action.payload)
        },
    }
});

export const {
    addToProductView
} = ProductViewSlice.actions

export const selectProduct = state => state.product.view
export default ProductViewSlice.reducer