import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  name: "ui",
  initialState: {

    theme:'root',

  },
  reducers: {
    
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  

  }
});
