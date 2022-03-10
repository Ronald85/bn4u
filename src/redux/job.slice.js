import { createSlice } from "@reduxjs/toolkit";
import { jobs } from "../data";

const initialState = { items: jobs, errors: null };

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getAll: (state) => {
      state.items = jobs;
    },
    getJob: (state, action) => {}
  }
});

export const { getAll, getJob } = jobSlice.actions;
export default jobSlice.reducer;
