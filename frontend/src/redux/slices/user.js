import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  role: "",
  email: "",
  name: "",
  id: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    UPDATE_NAME: (state, action) => {
      state.name = action.payload;
    },
    UPDATE_EMAIL: (state, action) => {
      state.email = action.payload;
    },
    UPDATE_ROLE: (state, action) => {
      state.role = action.payload;
    },
    UPDATE_ID: (state, action) => {
      state.id = action.payload;
    },
    UPDATE_TOKEN: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  UPDATE_EMAIL,
  UPDATE_ID,
  UPDATE_NAME,
  UPDATE_TOKEN,
  UPDATE_ROLE,
} = userSlice.actions;

export default userSlice.reducer;
