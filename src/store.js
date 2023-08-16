import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import addressReducer from './features/order/addressSlice';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
  },
  preloadedState: persistedState,
});

//we add the subscribe method to add a listener that will be involved on any state change
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
