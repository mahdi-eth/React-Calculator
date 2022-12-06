import React from "react";
import "./style.css";

export function ClearButton({ children, handleClear }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleClear} className="clear-button">
      {children}
    </div>
  );
}
