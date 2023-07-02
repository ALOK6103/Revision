import React, { useEffect, useState } from "react";

const MyTimer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSecond((prevSecond) => {
          const newSecond = prevSecond + 1;

          if (newSecond === 60) {
            setSecond(0);

            setMinute((prevMinute) => {
              const newMinute = prevMinute + 1;

              if (newMinute === 60) {
                setMinute(0);

                setHour((prevHour) => prevHour + 1);
              }

              return newMinute;
            });
          }

          return newSecond;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <div>
      <h2>Google Timer</h2>
      <div>
        {/* {hour.toString().padStart(2, '0')}:
        {minute.toString().padStart(2, '0')}:
        {second.toString().padStart(2, '0')} */}
        {hour} {minute} {second}
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default MyTimer;
