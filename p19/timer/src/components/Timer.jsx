import React, { useState, useEffect } from 'react';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => {
          const newSeconds = prevSeconds + 1;

          if (newSeconds === 60) {
            setSeconds(0);
            setMinutes(prevMinutes => {
              const newMinutes = prevMinutes + 1;

              if (newMinutes === 60) {
                setMinutes(0);
                setHours(prevHours => prevHours + 1);
              }

              return newMinutes;
            });
          }

          return newSeconds;
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
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Google Timer</h1>
      <div>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer