import React, { useState, useEffect } from 'react';

function Timer({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
  const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const formattedDays = Math.floor(time / (24 * 60 * 60));
    const remainingHours = time % (24 * 60 * 60);
    const formattedHours = Math.floor(remainingHours / (60 * 60));
    const remainingMinutes = remainingHours % (60 * 60);
    const formattedMinutes = Math.floor(remainingMinutes / 60);
    const formattedSeconds = remainingMinutes % 60;
    return `${formattedDays} days ${formattedHours} hours ${formattedMinutes} minutes ${formattedSeconds} seconds`;
  };

  return (
    <div>
      <h1>Countdown: {formatTime(remainingSeconds)}</h1>
    </div>
  );
}

export default Timer;
