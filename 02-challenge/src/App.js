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

  function stepDown() {
    if (step > 1) setStep((s) => s - 1);
  }

  function stepUp() {
    setStep((s) => s + 1);
  }

  function countDown() {
    setCount((c) => c - 1);
  }

  function countUp() {
    setCount((c) => c + 1);
  }

  return (
    <React.Fragment>
      <div className="counter-container">
        <button onClick={stepDown}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={stepUp}>+</button>
      </div>
      <br />
      <div className="counter-container">
        <button onClick={countDown}>-</button>
        <p>
          Count: <span>{count}</span>
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
    </React.Fragment>
  );
}
