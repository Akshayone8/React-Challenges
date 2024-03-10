import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  console.log("inputRefs ", inputRefs.current[2]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    console.log(index, " "); //index->0,1,2,3
    const value = e.target.value; //value -> what u enter on input box
    if (isNaN(value)) return; //if it is not a number then return
    const newOtp = [...otp];
    console.log(newOtp); //it will have the recorcd of previous value
    // ---------------
    //allow only one input
    newOtp[index] = value.substring(value.length - 1); //to only select last number
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    //move to next filed if current field is completed
    console.log("input filed ", index, " ", length);
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    //read about setSelectionRange
    inputRefs.current[index].setSelectionRange(1, 1);

    //optional

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    console.log(otp[index]);
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //move focus to previous input filed on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="text-center">
      {otp.map((value, index) => (
        <input
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          key={index}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpInput"
        />
      ))}
    </div>
  );
};

export default OtpInput;
