import "./styles.css";
import { useState } from "react";

export default function App() {
  const INCREMENT = 1;
  const DECREMENT = 1;
  const MaxValue = 50;
  const MinValue = 0;

  const [counter, setCounter] = useState(MinValue);

  return (
    <div>
      <button
        disabled={counter === MaxValue}
        onClick={() => setCounter(counter + INCREMENT)}
      >
        +
      </button>
      <p>{counter}</p>
      <button
        disabled={counter === MinValue}
        onClick={() => setCounter(counter - DECREMENT)}
      >
        -
      </button>
    </div>
  );
}
