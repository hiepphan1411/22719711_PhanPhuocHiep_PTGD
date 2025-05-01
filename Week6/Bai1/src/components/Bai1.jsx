import { useState, useReducer } from "react";

export default function Bai1() {
  const initalState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return action.payload.num1 + action.payload.num2;
      case "decrease":
        return action.payload.num1 - action.payload.num2;
      case "multiply":
        return action.payload.num1 * action.payload.num2;
      case "divide":
        if (action.payload.num2 === 0) return "Không thể chia cho 0";
        return action.payload.num1 / action.payload.num2;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handChangeNum1 = (e) => {
    setNum1(Number(e.target.value));
  };
  return (
    <div className="p-4 max-w-sm mx-auto shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Calculator</h2>
      <input 
        type="number"
        value={num1}
        onChange={handChangeNum1}
        className="border p-2 w-full mb-2"
        placeholder="Nhập số thứ nhất"
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        className="border p-2 w-full mb-4"
        placeholder="Nhập số thứ hai"
      />
      <div className="flex justify-between">
        <button
          onClick={() =>
            dispatch({ type: "increase", payload: { num1, num2 } })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrease", payload: { num1, num2 } })
          }
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({ type: "multiply", payload: { num1, num2 } })
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          *
        </button>
        <button
          onClick={() => dispatch({ type: "divide", payload: { num1, num2 } })}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          /
        </button>
      </div>
      <h3 className="mt-4 text-lg font-semibold">Result: {state}</h3>
    </div>
  );
}
