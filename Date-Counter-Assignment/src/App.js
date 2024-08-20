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
  return (
    <div className="counter">
      <div>
        <button onClick={handleStepSub}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepAdd}>+</button>
      </div>
      <div>
        <button onClick={handleCountSub}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
