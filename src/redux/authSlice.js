import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = JSON.stringify(action.payload);
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      state.user = false;
    },
    nicknameUpdate: (state, action) => {
      state.user.displayName = action.payload;
    },
  },
});

export const { login, logout, nicknameUpdate } = authSlice.actions;
export default authSlice.reducer;
