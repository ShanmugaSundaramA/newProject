import { createSlice } from "@reduxjs/toolkit";

export const mainFilterSlice = createSlice({
  name: "mainFilter",
  initialState: {
    value: 0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = counterSlice.actions;

export default counterSlice.reducer;
