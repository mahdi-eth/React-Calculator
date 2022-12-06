import React from "react";
import "./style.css";

const isNotOperator = (val) => {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(val) || val === "." || val === "=";
};

export function Button({ children, handleClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`button ${
        isNotOperator(children) ? "not-operator" : "operator"
      }`}
      role="button"
      tabIndex={0}
      onClick={() => handleClick(children)}>
      {children}
    </div>
  );
}
