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
    },
    addProfile: (state, action) => {
      state.items.push(action.payload);
    },
    getProfile: (state, action) => {
      alert(action);
    }
  }
});

export const { getAll, addProfile, getProfile } = profileSlice.actions;
export default profileSlice.reducer;
