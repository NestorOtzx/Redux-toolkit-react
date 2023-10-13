import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    nombre: "nombre por defecto",
    cedula: "cedula por defecto",
  },
  reducers: {
    modificarNombre: (state, action) => {
      state.nombre = action.payload;
    },
    modificarCedula: (state, action) => {
      state.cedula =  action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { modificarNombre, modificarCedula } = usuarioSlice.actions;

export default usuarioSlice.reducer;
