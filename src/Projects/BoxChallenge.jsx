import React, { useState } from "react";

const BoxChallenge = () => {
  const [bgColor, setBgColor] = useState({
    box1: "",
    box2: "",
    box3: "",
  });

  const box1 = (e) => {
    e.stopPropagation();
    setBgColor((prevState) => ({
      ...prevState,
      box1: getRandomColor(),
    }));
  };
  const box2 = (e) => {
    e.stopPropagation();
    setBgColor((prevState) => ({
      ...prevState,
      box2: getRandomColor(),
    }));
  };
  const box3 = (e) => {
    e.stopPropagation();
    setBgColor((prevState) => ({
      ...prevState,
      box3: getRandomColor(),
    }));
  };

  const getRandomColor = () => {
    return `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
      )`;
  };

  return (
    <div className="flex items-center justify-center my-10 cursor-pointer">
      <div
        className="border border-black h-[400px] w-[400px] rounded-lg"
        onClick={box1}
        style={{ backgroundColor: `${bgColor.box1}` }}
      >
        <div
          className="border border-red-500 border-spacing-2 h-[300px] w-[300px] rounded-lg"
          onClick={box2}
          style={{ backgroundColor: `${bgColor.box2}` }}
        >
          <div
            className="border border-green-500 border-spacing-2 h-[200px] w-[200px] rounded-lg"
            onClick={box3}
            style={{ backgroundColor: `${bgColor.box3}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BoxChallenge;
