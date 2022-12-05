/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Button } from "../Button";
import { ClearButton } from "../ClearButton";
import { Input } from "../Input";
import "./style.css";

export function Calculater() {
  return (
    <div className="calculater">
      <Input />
      <div className="numbers">
        <div className="numbers-row-1">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </div>
        <div className="numbers-row-2">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
        </div>
        <div className="numbers-row-3">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </div>
      </div>
      <ClearButton />
    </div>
  );
}
