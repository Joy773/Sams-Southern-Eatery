import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        addItem: (state, action) => {
            console.log(state, action.payload)
            const existingItem = state.items.find(item => item.id == action.payload.id)
                if(existingItem)
                {
                    console.log(existingItem)
                    existingItem.quantity += 1;
                }
                else
                {
                    console.log(action.payload)
                    state.items.push({ ...action.payload, quantity: 1 })
                }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id == action.payload.id)
            if(item)
            {
                item.quantity = action.payload.quantity
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})
export const {addItem, removeItem, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;