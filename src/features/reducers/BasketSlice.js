import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    basketData: []
}


console.log(initialState)

// Add product to the cart
const BasketSlice = createSlice({
    name: "baskets",
    initialState,
    reducers: {
    addToBasket : (state, action) =>{
        state.basketData.push(action.payload)
    },
    
    //Remove product from the cart
    removeFromBasket: (state, action) =>{
        const index = state.basketData.findIndex(
            ({id}) => id == action.payload.id
        );
        let newBasket = [...state.basketData];
        console.log(index)
        if (index >= 0) {
            newBasket.splice(index, 1);
    
        } else {
            console.warn(
              `Cant remove product (id: ${action.payload.id}) as its not in basket!`
            )
        }
        return {
            ...state,
            basketData: newBasket
        }
    }
       

    }
});

export const {
    addToBasket,
    addToProductView,
    removeFromBasket
} = BasketSlice.actions

export const selectBasketData = state => state.baskets.basketData;

export default BasketSlice.reducer
