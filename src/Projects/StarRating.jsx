import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";

const StarRating = () => {
  const [backColor, setBackColor] = useState(0);
  const [text, setText] = useState("");
  let NumOfStar = [1, 2, 3, 4, 5];

  let getStarIndex = (getindexs) => {
    setBackColor((prevColor) =>
      getindexs + 1 === prevColor ? prevColor - 1 : getindexs + 1
    );
    // setText("Thanks For Your Feedback😀");
  };
  return (
    <div className="flex flex-col items-center border-spacing-2 border w-[400px] h-auto my-8 mx-auto rounded-3xl ">
      <h1 className="text-4xl">Star Rating</h1>
      <div className="flex text-3xl cursor-pointer testing">
        {NumOfStar.map((stars, index) => (
          <FaRegStar
            key={index}
            onClick={() => getStarIndex(index)}
            className={`fa-star ${index + 1 <= backColor ? "highlight" : ""}`}
          />
        ))}
      </div>
      <h2 className="text-xl my-4">
        {backColor === 0
          ? ""
          : backColor <= 2
          ? "Sorry to Hear this 🥲"
          : "Thanks for the Review I think u liked it 😀"}
      </h2>
    </div>
  );
};

export default StarRating;
