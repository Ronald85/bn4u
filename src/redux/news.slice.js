import { createSlice } from "@reduxjs/toolkit";
import { news } from "../data";

const initialState = {
  items: news,
  errors: null
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getAll: (state) => {}
  }
});

export const { getAll } = newsSlice.actions;
export default newsSlice.reducer;
