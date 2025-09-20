import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const rightSidebarSlice = createSlice({
  name: "rightSidebar",
  initialState,
  reducers: {
    toggleRightSidebar: (state) => {
        console.log("RightSideBar open", state.isOpen)
      state.isOpen = !state.isOpen; 
    },
    openRightSidebar: (state) => {
      state.isOpen = true;
    },
    closeRightSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleRightSidebar, openRightSidebar, closeRightSidebar } =
  rightSidebarSlice.actions;

export default rightSidebarSlice.reducer;
