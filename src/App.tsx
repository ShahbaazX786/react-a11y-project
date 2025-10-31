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
      console.error("Invalid Expression, Please check your string", e);
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

      <div className="p-5 text-black bg-white m-auto max-w-[600px] max-h-screen flex flex-col justify-center items-center gap-2.5">
        <img
          alt="Banner Image of orange string ball representing string calculation"
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0"
          width={400}
          height={200}
          className="rounded-md"
        />

        <main id="main-content" className="w-full text-center">
          <h1 className="text-2xl font-semibold mt-4">String Calculator</h1>

          <label
            htmlFor="expression"
            className="text-xl text-gray-700 block mt-2"
          >
            Enter numbers or expressions
          </label>

          <textarea
            id="expression"
            className="my-2.5 w-[80%] text-black border rounded p-2 focus:ring-2 focus:ring-blue-500"
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
              className="text-green-600 text-balance leading-normal mt-3"
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

        <aside
          aria-label="Examples of valid expressions"
          className="mt-6 p-4 border-t border-gray-300 w-full text-left bg-gray-50 rounded"
        >
          <h2 className="text-lg font-medium mb-2 text-gray-700">
            Example Expressions
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              <code>1 + 2 + 3</code> → <strong>6</strong>
            </li>
            <li>
              <code>10 - 5 + 2</code> → <strong>7</strong>
            </li>
            <li>
              <code>5 * 2 + 3</code> → <strong>13</strong>
            </li>
            <li>
              <code>1\n2,3</code> (newline + comma) → <strong>6</strong>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default App;
