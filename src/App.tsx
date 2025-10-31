import { useState } from "react";
import evalExpression from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    try {
      const result = evalExpression(input);
      setResult(result);
    } catch (e) {
      alert("Invalid String");
      console.log("Invalid Expression, Please check your string", e);
    }
  };

  return (
    <div className="p-5 text-[#aaa] bg-white m-auto max-w-[600px] max-h-screen flex flex-col justify-center items-center gap-2.5">
      <img
        alt="Banner Image of Orange string ball, representing string calculation"
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
      />

      <h1 className="text-2xl font-semibold mt-4">String Calculator</h1>

      <label htmlFor="expression" className="text-xl">
        Enter numbers
      </label>
      <textarea
        id="expression"
        className="my-2.5 text-[#aaa] border p-0.5"
        style={{ margin: "10px 0", color: "#aaa" }}
        placeholder="Enter your expression here"
        value={input}
        aria-describedby="expressionHelp"
        rows={3}
        onChange={(e) => setInput(e.target.value)}
      />

      <div
        onClick={handleCalculate}
        className="w-36 rounded-4xl text-center p-2.5 bg-[#008cba]"
        style={{
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate
      </div>

      {result !== null && <p className="text-green-500">Result: {result}</p>}

      <div
        role="alert"
        id="expressionHelp"
        className="text-sm text-gray-500 mt-1"
      >
        Make sure you enter valid numbers or arithmetic expressions.
      </div>
    </div>
  );
};

export default App;
