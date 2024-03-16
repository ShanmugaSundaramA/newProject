import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    value: 0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = ProductSlice.actions;

export default ProductSlice.reducer;
