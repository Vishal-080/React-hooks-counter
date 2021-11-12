import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onSub = () => {
    setCounter(counter - 1);
  };

  const onMul = () => {
    setCounter(counter * 2);
  };

  const onReset = () => {
    setCounter(counter * 0);
  };

  return (
    <div className="App">
      <br />
      <h1>My Counter</h1>
      <h2>{counter}</h2>
      <br />
      <button onClick={onAdd}>Add</button>
      <button onClick={onSub}>Substract</button>
      <button onClick={onMul}>Multiply</button>
      <button onClick={onReset}>Reset</button>
      <br />
      <br />
      <br />
    </div>
  );
}
