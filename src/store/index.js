import { configureStore } from "@reduxjs/toolkit";
import products from "./features/layout1/products/Products";
import mainFilter from "./features/layout1/mainFilter/MainFilters";

export default configureStore({
  reducer: {
    products,
    mainFilter,
  },
});
