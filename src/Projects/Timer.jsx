import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  //start funtion
  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsActive(true);
    }
  };

  //reset function
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col  items-center border-spacing-2 border w-[400px] h-[300px] my-8 mx-auto rounded-3xl">
      <div className="p-2">
        <input
          type="number"
          className="border mr-1"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="border"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div className="my-2">
        <button
          onClick={startTimer}
          className="bg-blue-500 py-1 px-4 rounded-full  text-white mx-2"
        >
          Start
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 py-1 px-4 rounded-full  text-white"
        >
          Reset
        </button>
      </div>
      <div>
        {isActive ? (
          <h1>
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
          </h1>
        ) : (
          <b>Timer Stopped</b>
        )}
      </div>
    </div>
  );
};

export default Timer;
