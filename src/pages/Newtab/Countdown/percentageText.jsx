import React, { useEffect, useState } from 'react';

const PercentageString = () => {
  const calculatePercentage = () => {
    // get current time in ms
    const now = new Date().getTime();
    // get time tonight at 00:00:00 in ms
    const midnight = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
    // calculate portion of the day that is missing
    const percentage = 1 - (now - midnight) / 86400000;
    // force that percentage always has 7 decimals
    const percentageRounded = Math.round(percentage * 10000000) / 10000000;
    // we only want the decimals
    const percentageString = percentageRounded.toString().split('.')[1];
    // if less than 7 decimals, add 0s
    return percentageString.padEnd(7, '0');
  };
  const [percentageString, setPercentageString] = useState(
    calculatePercentage()
  );

  // refresh percentage every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentageString(calculatePercentage());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <span>{percentageString}</span>;
};

export default PercentageString;
