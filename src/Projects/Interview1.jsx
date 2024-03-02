import React, { useState } from "react";

const Interview1 = () => {
  const [text, setText] = useState("");
  const [getResult, setResult] = useState("");

  const captureText = (e) => {
    const result = e.target.value;
    setText(result);
    const finalResult = result
      .split("")
      .map((item, index) => {
        return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
      })
      .join("");

    setResult(finalResult);
  };
  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-auto my-8 mx-auto rounded-3xl">
      <h1 className="text-2xl">Interview Question</h1>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => captureText(e)}
        className="border"
      />
      <div>{getResult}</div>
    </div>
  );
};

export default Interview1;
