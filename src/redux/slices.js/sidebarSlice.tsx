import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: true,
};

const sidebarSlice = createSlice({
    name: "Sidebar", 
    initialState: initialState,
    reducers: {
        open: (state, action) => {
            state.sidebarOpen =  action.payload
        }
    }
})

export const { open } = sidebarSlice.actions; 
export default sidebarSlice.reducer;   