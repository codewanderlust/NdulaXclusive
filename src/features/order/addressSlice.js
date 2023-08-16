import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//fetchAddress will become the action create function that we will later call
//names for async thunks should be sth like fetchAddress and not getAddress(reserved for selectors)
// 1. the asyncthunk takes in the action type name(which we will never manually use, but redux needs)
//2/ the second argument is the actual thunj fxn( the code executed as soon as the the action is dispatched)
//The createAsync thunk produces three additional action types
//a. pending, b. fulfilled, c. rejected

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //PAYLOAD of the fulfilled state
    return { position, address };
  },
);
const initialState = {
  //updating the state based on createAsynThunk,
  address: '',
  status: 'idle',
  position: {},
  error: '',
};

const addressReducer = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  //connecting the asyncthunk to the reducers
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        // The error string is automatically placed on the action
        // state.error = action.error.message;
        state.error =
          'There was an error getting your address, make sure to fill this field!';
      }),
});

export const { updateName } = addressReducer.actions;
export default addressReducer.reducer;
