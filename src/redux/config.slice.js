import { createSlice } from "@reduxjs/toolkit";
import { configs } from "../data";

const initialState = {
  items: configs,
  errors: null
};

export const configSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    getAll: (state) => {
      state.items = configs;
    }
  }
});

export const { getAll } = configSlice.actions;
export default configSlice.reducer;
