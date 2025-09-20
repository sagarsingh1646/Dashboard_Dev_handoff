import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import rightSideBarReducer from "../features/rightSideBarSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    rightSidebar: rightSideBarReducer,
  },
});
