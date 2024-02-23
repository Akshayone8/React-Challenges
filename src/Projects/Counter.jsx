import React, { useState } from "react";

const Counter = () => {
  const [text, setText] = useState(0);
  const [count, setCount] = useState(0);

  const onInc = () => {
    setCount((prev) => prev + text);
  };

  const onDec = () => {
    setCount((prev) => prev - text);
  };
  const onReset = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-[300px] my-8 mx-auto rounded-3xl">
      <h1 className="text-3xl ">Counter</h1>
      <div className="flex flex-col">
        <h2 className="text-2xl text-center">{count}</h2>
        <div className="flex justify-around">
          <button
            onClick={onInc}
            className="bg-blue-500 py-2 px-4 rounded-full  text-white  "
          >
            +
          </button>
          <button
            onClick={onDec}
            className="bg-blue-500 py-2 px-4 rounded-full  text-white  "
          >
            -
          </button>
        </div>
        <div className="text-center flex flex-col items-center my-4">
          <label htmlFor="forNum">Increment/Decrement by</label>
          <input
            type="number"
            id="forNum"
            min={1}
            max={1000}
            value={text}
            onChange={(e) => setText(Number(e.target.value))}
            className="border border-spacing-1"
          />
          <button
            onClick={onReset}
            className="bg-blue-500 py-2 px-4 rounded-3xl text-white my-4"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
