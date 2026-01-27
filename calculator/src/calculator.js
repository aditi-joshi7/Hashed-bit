import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => setResult(Number(num1) / Number(num2));

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <div className="buttons">
        <button className="add" onClick={add}>Add</button>
        <button className="subtract" onClick={subtract}>Subtract</button>
        <button className="multiply" onClick={multiply}>Multiply</button>
        <button className="divide" onClick={divide}>Divide</button>
      </div>

      <div className="result">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default Calculator;