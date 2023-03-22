import React from "react";
import "../css/contador.css";
export default function Contador({ clicks }) {
  return (
    <div className="contador">
      {clicks}
    </div>
  )
}