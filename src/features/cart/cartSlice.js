import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItems(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItems,
  deleteItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//i want us to create a middleware between the dispatch and the store
//using the apicart we created to fetch sneakers from the supabase
//and add them to the cart

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
