import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer, // dark mode state
    // you can add more reducers here in future
  },
});
