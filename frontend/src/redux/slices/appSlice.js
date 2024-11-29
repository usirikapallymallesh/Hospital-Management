import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  language: "en",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    TOGGLE_MODE(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    CHANGE_LANGUAGE(state, action) {
      state.language = action.payload;
    },
  },
});

export const { TOGGLE_MODE,CHANGE_LANGUAGE } = appSlice.actions;

export default appSlice.reducer;
