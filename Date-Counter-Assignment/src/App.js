import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [warning, setWarning] = useState("");

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepAdd() {
    setStep((s) => s + 1);
  }
  function handleStepSub() {
    setStep((s) => s - 1);
  }
  function handleCountAdd() {
    setCount((c) => c + step);
  }
  function handleCountSub() {
    setCount((c) => c - step);
  }
  function handleReset() {
    setStep(1);
    setCount(0);
    setWarning("");
  }
  function showWarning(value) {
    setCount(value);
    setWarning("");
  }
  return (
    <div className="counter">
      <div className="space">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="space">
        <button onClick={handleStepSub}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepAdd}>+</button>
      </div>
      <div className="space">
        <button onClick={handleCountSub}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) =>
            !isNaN(Number(e.target.value))
              ? showWarning(Number(e.target.value))
              : setWarning(
                  "🤦‍♀️ Ops..!! You entered text, please Enter only digits"
                )
          }
        />
        <button onClick={handleCountAdd}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>reset</button>
        </div>
      ) : null}
      <div>
        <p>{warning}</p>
      </div>
    </div>
  );
}
