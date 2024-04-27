import React, { useState, useEffect } from "react";

const MaxCount = () => {
  const [incrNum, setIncrNum] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Corrected cleanup function
  }, [seconds]);

  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-[300px] my-8 mx-auto rounded-3xl">
      <h1 className="text-4xl text-blue-500">Max Count</h1>
      <h1 className="text-3xl">{incrNum}</h1>
      <h1>Time Left: {seconds} Seconds</h1>
      {seconds ? (
        <button
          onClick={() => setIncrNum((prev) => prev + 1)}
          className="bg-blue-500 py-2 px-4 rounded-full  text-white  "
        >
          +
        </button>
      ) : (
        <h3 className="text-red-500">Your Score {incrNum}</h3>
      )}
    </div>
  );
};

export default MaxCount;
