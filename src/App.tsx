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
    <>
      <a
        href="#main-content"
        className="absolute left-2 top-0 -translate-y-full focus:translate-y-0 bg-blue-600 text-white px-4 py-2 rounded transition-transform duration-200 z-50"
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        className="p-5 text-black bg-white m-auto max-w-[600px] max-h-screen flex flex-col justify-center items-center gap-2.5"
      >
        <img
          alt="Banner Image of Orange string ball, representing string calculation"
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          className="rounded-lg"
        />

        <h1 className="text-2xl font-semibold mt-4">String Calculator</h1>

        <label htmlFor="expression" className="text-xl text-gray-700">
          Enter numbers or expressions
        </label>
        <textarea
          id="expression"
          className="my-2.5 text-black border p-0.5"
          placeholder="Enter your expression here"
          value={input}
          aria-describedby="expressionHelp"
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleCalculate}
          className="w-36 rounded-full text-center py-2.5 bg-[#008cba] text-white hover:bg-[#0074a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition cursor-pointer"
        >
          Calculate
        </button>

        {result !== null && (
          <p
            className="text-green-600 text-balance leading-normal"
            role="status"
          >
            Result: {result}
          </p>
        )}

        <div
          role="alert"
          id="expressionHelp"
          className="text-sm text-gray-500 mt-1"
        >
          Make sure you enter valid numbers or arithmetic expressions.
        </div>
      </main>
    </>
  );
};

export default App;
