import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    userLogin(state) {
      state.isLogin = true;
    },
    userLogout(state) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      state.isLogin = false;
      window.location.reload();
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
