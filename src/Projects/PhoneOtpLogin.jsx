import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    //handle Phone number submit
    let regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please Enter Proper Mobile Number");
      return;
    }
    //show otp filed
    setShowOtpInput(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("hey");
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      {!showOtpInput ? (
        <>
          <h1 className="text-2xl my-2">Enter Your Mobile Number </h1>
          <form onSubmit={handlePhoneSubmit}>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter Phone Number"
              className="border"
            />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div>
          <b className="text-2xl text-center">
            Enter OTP Sent To {phoneNumber}
          </b>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
