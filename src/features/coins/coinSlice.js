import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/coins/showAllCoins";

const initialState = {
  value: 0,
  users: [],
  loading: false,
  error: null,
};

export const coinSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    // fetch coin API
    getCoinsStart(state) {
      state.loading = true;
    },
    getCoinsSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    getCoinsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  getCoinsStart,
  getCoinsSuccess,
  getCoinsFailure,
} = coinSlice.actions;
//
export const fetchAllUsers = () => async (dispatch) => {
  try {
    dispatch(getCoinsStart());
    const response = await fetchUsers();
    dispatch(getCoinsSuccess(response.data));
  } catch (error) {
    dispatch(getCoinsFailure(error));
  }
};

export default coinSlice.reducer;
