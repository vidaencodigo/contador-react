import React from "react";
import "../css/button.css";
export default function ButtonComponent({ text, botonClick, manejarClick }) {

  return (
    <button
      onClick={manejarClick}
      className={botonClick ? 'button--click' : 'button--reset'}>
      {text}
    </button>
  )
}