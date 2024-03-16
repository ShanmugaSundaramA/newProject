import { configureStore } from "@redux/toolkit";
import products from "./features/layout1/products/products";
import mainFilter from "./features/layout1/mainFilter/MainFilters";

export default configureStore({
  reducer: {
    products,
    mainFilter,
  },
});
