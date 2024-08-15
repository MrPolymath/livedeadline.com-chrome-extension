import { useSettingsStore } from "../../../common/useSettingsStore";
import React, { useEffect, useState, useCallback } from "react";

const Countdown = () => {
  const [settings] = useSettingsStore();
  // read settings from useSettingsStore
  const {
    countdownText,
    countdownEndTime,
    backgroundColor,
    daysColor,
    decimalsColor,
    daysTextColor,
    deadlineTextColor,
  } = settings;

  const [daysLeft, setDaysLeft] = useState(0);
  const [percentageString, setPercentageString] = useState("0000000");

  const calculatePercentage = useCallback(() => {
    if (!countdownEndTime) return "0000000";
    const now = new Date().getTime();
    const remainingTime = countdownEndTime - now;

    if (remainingTime <= 0) {
      return "0000000";
    }

    const remainingTimeInCurrentDay = remainingTime % 86400000;

    const percentageOfDay = remainingTimeInCurrentDay / 86400000;
    const percentageRounded = (percentageOfDay * 10000000).toFixed(0);

    return percentageRounded.padStart(7, "0");
  }, [countdownEndTime]);

  useEffect(() => {
    if (countdownEndTime) {
      setPercentageString(calculatePercentage());

      const interval = setInterval(() => {
        setPercentageString(calculatePercentage());
      }, 100);

      const calculateDaysLeft = () => {
        const daysLeftCalculated = Math.floor(
          (countdownEndTime - Date.now()) / 1000 / 60 / 60 / 24
        );
        setDaysLeft(daysLeftCalculated);
      };

      calculateDaysLeft();

      return () => clearInterval(interval);
    }
  }, [countdownEndTime, calculatePercentage]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundColor }}
    >
      <div>
        <div className="flex items-center justify-center">
          <div className="font-bold text-8xl" style={{ color: daysColor }}>
            {daysLeft}
          </div>
          <div className="flex flex-col">
            <div
              className="text-3xl font-semibold font-mono"
              style={{ color: decimalsColor }}
            >
              <span>.</span>
              <span>{percentageString}</span>
            </div>
            <div className="text-3xl pl-4" style={{ color: daysTextColor }}>
              days
            </div>
          </div>
        </div>
        <div className="text-3xl mt-5" style={{ color: deadlineTextColor }}>
          {countdownText}
        </div>
      </div>
    </main>
  );
};

export default Countdown;
