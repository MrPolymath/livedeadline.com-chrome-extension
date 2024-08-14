import React from 'react';
import { useSettingsStore } from '../../../common/useSettingsStore';
import PercentageString from './percentageText';

const Countdown = () => {
  const [settings] = useSettingsStore();
  const countdownDate = settings.countdownDate;
  const countdownText = settings.countdownText;
  // calculate days left until countdown date
  const daysLeft = Math.floor(
    (new Date(countdownDate) - new Date()) / 1000 / 60 / 60 / 24 - 1
  );

  return (
    <div className="h-[calc(100%-64px)] flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <div className="font-bold text-8xl">{daysLeft}</div>
        <div className="flex flex-col">
          <div className="text-3xl font-semibold font-mono">
            <span>.</span>
            <PercentageString />
          </div>
          <div className="text-3xl text-slate-600 pl-4">days</div>
        </div>
      </div>
      <div className="text-3xl mt-5">{countdownText}</div>
    </div>
  );
};

export default Countdown;
