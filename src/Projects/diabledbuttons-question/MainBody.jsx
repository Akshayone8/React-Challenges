import React, { useState } from "react";
import { dataJSON } from "./data";

const MainBody = () => {
  const [index, setIndex] = useState(0);
  const showNext = () => setIndex((prev) => prev + 1);
  const showPrev = () => setIndex((prev) => prev - 1);
  const resetBtn = () => setIndex(0);
  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-[300px] my-8 mx-auto rounded-3xl">
      <div className="flex p-5 ">
        <button
          disabled={index === 0}
          onClick={resetBtn}
          className={`${
            index === 0
              ? "bg-blue-500 py-2 px-4 rounded-full  text-white opacity-50 cursor-not-allowed"
              : "bg-blue-500 py-2 px-4 rounded-full  text-white"
          }`}
        >
          Reset
        </button>
        <button
          disabled={index === 0}
          onClick={showPrev}
          className={`${
            index === 0
              ? "bg-blue-500 py-2 px-4 rounded-full  text-white opacity-50 cursor-not-allowed"
              : "bg-blue-500 py-2 px-4 rounded-full  text-white"
          }`}
        >
          Previous
        </button>
        <button
          disabled={index === dataJSON.length - 1}
          onClick={showNext}
          className={`${
            index === dataJSON.length - 1
              ? "bg-blue-500 py-2 px-4 rounded-full  text-white opacity-50 cursor-not-allowed"
              : "bg-blue-500 py-2 px-4 rounded-full  text-white"
          }`}
        >
          Next
        </button>
      </div>
      <div>
        <h1 className="text-3xl">{dataJSON[index].heading}</h1>
        <p className="text-xl">{dataJSON[index].content}</p>
      </div>
    </div>
  );
};

export default MainBody;
