import React, { useRef, useState } from "react";

const ColorPicker = () => {
  const [changeColor, setChangeColor] = useState("rgb(255, 255, 255)");

  const getRandomBackgroundColor = () => {
    return setChangeColor(
      `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
      )`
    );
  };

  return (
    <div
      style={{ backgroundColor: `${changeColor}` }}
      className="h-screen flex justify-center items-center flex-col"
    >
      <button
        className="py-2 px-4 border rounded-lg"
        onClick={getRandomBackgroundColor}
      >
        Change Color 🎨
      </button>
      <h1 className="text-xl my-3">{changeColor}</h1>
    </div>
  );
};

export default ColorPicker;
