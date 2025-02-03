import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Example slice for user authentication

export const store = configureStore({
  reducer: {
    user: userReducer, // Add reducers here
  },
});

export default store;
