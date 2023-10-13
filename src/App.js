import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumar, restar } from "./redux/contadorSlice";
import { activar, desactivar } from "./redux/botonSlice";
import { modificarNombre, modificarCedula } from "./redux/usuarioSlice";

import "./styles.css";

export default function App() {
  const { cuenta } =   useSelector((state) => state.contador);
  const { activado } = useSelector((state) => state.activador);
  const usuario =  useSelector((state) => state.usuario);

  const dispatch = useDispatch();

  const modNombre = (evento) => {
    dispatch(modificarNombre(evento.target.value));
  }
  const modCedula = (evento) => {
    dispatch(modificarCedula(evento.target.value));
  } 

  return (
    <div className="App">
      <h1> SUMADOR </h1>
      <h1> {cuenta}</h1>
      
      <button onClick={() => dispatch(restar())}>restar</button>
      <button onClick={() => dispatch(sumar())}>sumar</button>

      <h1> ACTIVAR/DESACTIVAR BOTÓN </h1>

      <button onClick={() => dispatch(activar())}>activar</button>
      <button onClick={() => dispatch(desactivar())}>desactivar</button>

      {activado ? <h1>Hola</h1> : null}

      <h1> VARIAS VARIABLES EN UN MISMO SLICE </h1>
      <p>Nombre: {usuario.nombre}</p>
      <p>Cedula: {usuario.cedula}</p>

      <form>
        <h3>Cambiar el nombre: </h3>
        <input onChange={modNombre}/>
        <h3>Cambiar la cedula: </h3>
        <input onChange={modCedula}/>
      </form>
      


    </div>
  );
}
