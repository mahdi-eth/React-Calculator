import React from "react";
import "./style.css";

export function Input({ input }) {
  return (
    <div>
      <input className="calc-input" type="text" value={input} disabled />
    </div>
  );
}
