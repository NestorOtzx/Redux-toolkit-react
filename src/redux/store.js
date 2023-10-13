import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlice";
import activadorReducer from "./botonSlice";
import usuarioReducer from "./usuarioSlice";

export default configureStore({
  reducer: {
    contador: contadorReducer,
    activador: activadorReducer,
    usuario: usuarioReducer
  }
});
