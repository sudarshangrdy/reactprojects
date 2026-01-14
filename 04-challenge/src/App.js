import React, { useState } from "react";
import "./app.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const days = step * count;
  const date = new Date();
  date.setDate(date.getDate() + days);

  function stepValue(e) {
    setStep(Number(e.target.value));
  }

  function countValue(e) {
    setCount(Number(e.target.value));
  }

  function countDown() {
    setCount((c) => c - 1);
  }

  function countUp() {
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
    setStep(1);
  }

  return (
    <React.Fragment>
      <div className="counter-container">
        <input
          type="range"
          max={10}
          min={1}
          onChange={stepValue}
          autoComplete="off"
        />
        <span>{step}</span>
      </div>
      <br />
      <div className="counter-container">
        <button onClick={countDown}>-</button>
        <p>
          <input type="text" value={count} onChange={countValue} />
        </p>
        <button onClick={countUp}>+</button>
      </div>
      <div className="date-display">
        <span>{days}</span> days from today is{" "}
        <span>
          {date.toLocaleDateString("en-GB", {
            weekday: "short", // "Sun"
            day: "numeric", // "11"
            month: "short", // "Jan"
            year: "numeric", // "2026"
          })}
        </span>
      </div>
      <div className="counter-container">
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}
