import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices.js/sidebarSlice.tsx";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice, 
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
