import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/shopCart/cartSlice'

export const store = configureStore ({
    reducer:{
        cart:cartReducer
    },
})