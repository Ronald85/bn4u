import { createSlice } from "@reduxjs/toolkit";
import { profiles as data } from "../data";

const initialState = {
  items: data,
  errors: null
};

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    getAll: (state) => {
      state.items = data;
    }
  }
});

export const { getAll } = profileSlice.actions;
export default profileSlice.reducer;
