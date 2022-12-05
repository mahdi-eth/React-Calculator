import React from "react";
import "./style.css";

const isOperator = (val) => {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(val) || val === "." || val === "=";
};

export function Button({ children }) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <div
      className="button"
      onClick={() => {
        isOperator(5);
      }}>
      {children}
    </div>
  );
}
