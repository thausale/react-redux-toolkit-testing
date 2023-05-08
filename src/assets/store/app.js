import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  theme: "light",
  language: "en",
  page: "home",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    toggleTheme: (state, action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setToken, clearToken, toggleTheme, setLanguage, setPage } =
  appSlice.actions;
export default appSlice.reducer;
