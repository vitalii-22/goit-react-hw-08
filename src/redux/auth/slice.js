import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      // .addCase(register.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(register.fulfilled, (state, action) => {
        // state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // .addCase(register.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
