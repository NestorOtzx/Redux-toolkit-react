import { createSlice } from "@reduxjs/toolkit";

export const botonSlice = createSlice({
  name: "activado",
  initialState: {
    activado: false
  },
  reducers: {
    activar: (state) => {
      state.activado = true;
    },
    desactivar: (state) => {
      state.activado = false;
    },
  }
});

// Action creators are generated for each case reducer function
export const { activar, desactivar } = botonSlice.actions;

export default botonSlice.reducer;
