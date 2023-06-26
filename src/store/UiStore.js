import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
