/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "../Button";
import { ClearButton } from "../ClearButton";
import { Input } from "../Input";
import "./style.css";

export function Calculator() {
  const [inputState, inputStateSeter] = useState({
    input: ""
  });

  const clickHandler = (i) => {
    inputStateSeter({ input: inputState.input + i });
  };

  const clear = () => {
    inputStateSeter({ input: "" });
  };

  const handlEqual = () => {
    inputStateSeter({
      input: evaluate(inputState.input.toString())
    });
  };
  return (
    <div className="calculator">
      <Input input={inputState.input} />
      <div className="button-container">
        <div className="numbers">
          <div className="numbers-row-1">
            <Button handleClick={clickHandler}>1</Button>
            <Button handleClick={clickHandler}>2</Button>
            <Button handleClick={clickHandler}>3</Button>
          </div>
          <div className="numbers-row-2">
            <Button handleClick={clickHandler}>4</Button>
            <Button handleClick={clickHandler}>5</Button>
            <Button handleClick={clickHandler}>6</Button>
          </div>
          <div className="numbers-row-3">
            <Button handleClick={clickHandler}>7</Button>
            <Button handleClick={clickHandler}>8</Button>
            <Button handleClick={clickHandler}>9</Button>
          </div>
          <div className="numbers-row-4">
            <Button handleClick={clickHandler}>.</Button>
            <Button handleClick={clickHandler}>0</Button>
            <Button handleClick={handlEqual}>=</Button>
          </div>
        </div>
        <div className="opearators">
          <div className="numbers-row-1">
            <Button handleClick={clickHandler}>+</Button>
          </div>
          <div className="numbers-row-2">
            <Button handleClick={clickHandler}>-</Button>
          </div>
          <div className="numbers-row-3">
            <Button handleClick={clickHandler}>*</Button>
          </div>
          <div className="numbers-row-4">
            <Button handleClick={clickHandler}>/</Button>
          </div>
        </div>
      </div>
      <ClearButton handleClear={clear}>Clear</ClearButton>
    </div>
  );
}
