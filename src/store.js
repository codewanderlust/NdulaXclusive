import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

//we add the subscribe method to add a listener that will be involved on any state change
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
