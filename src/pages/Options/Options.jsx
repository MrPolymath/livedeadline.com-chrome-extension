import React, { useEffect, useState } from "react";
import { useSettingsStore } from "../../common/useSettingsStore";
import Datepicker from "react-tailwindcss-datepicker";
import LivePreview from "./LivePreview";
import ColorPickerSection from "./ColorPickerSection";

const Options = () => {
  const [settings, setSettings] = useSettingsStore();

  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [time, setTime] = useState("00:00");
  const [description, setDescription] = useState("");

  const [backgroundColor, setBackgroundColor] = useState("#f1f5f9");
  const [daysColor, setDaysColor] = useState("#000000");
  const [decimalsColor, setDecimalsColor] = useState("#000000");
  const [daysTextColor, setDaysTextColor] = useState("#000000");
  const [deadlineTextColor, setDeadlineTextColor] = useState("#000000");

  useEffect(() => {
    if (settings.countdownEndTime) {
      const countdownDate = new Date(settings.countdownEndTime);
      const formattedDate = countdownDate.toISOString().split("T")[0];
      const formattedTime = countdownDate
        .toTimeString()
        .split(" ")[0]
        .slice(0, 5);

      setDateValue({
        startDate: formattedDate,
        endDate: formattedDate,
      });
      setTime(formattedTime);
      setDescription(settings.countdownText);
      setBackgroundColor(settings.backgroundColor);
      setDaysColor(settings.daysColor);
      setDecimalsColor(settings.decimalsColor);
      setDaysTextColor(settings.daysTextColor);
      setDeadlineTextColor(settings.deadlineTextColor);
    }
  }, [settings]);

  const handleDateChange = (newValue) => {
    if (newValue) {
      const { startDate, endDate } = newValue;
      setDateValue({ startDate, endDate });
      setSettings((prevState) => ({
        ...prevState,
        countdownEndTime: new Date(`${endDate}T${time}`).getTime(),
      }));
    }
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setSettings((prevState) => ({
      ...prevState,
      countdownEndTime: new Date(
        `${dateValue.endDate}T${event.target.value}`
      ).getTime(),
    }));
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setSettings((prevState) => ({
      ...prevState,
      countdownText: event.target.value,
    }));
  };

  const createColorChangeHandler = (colorKey, setColor) => (newColor) => {
    setColor(newColor);
    setSettings((prevState) => ({
      ...prevState,
      [colorKey]: newColor,
      selectedPreset: null,
    }));
  };

  const handleBackgroundColorChange = createColorChangeHandler(
    "backgroundColor",
    setBackgroundColor
  );
  const handleDaysColorChange = createColorChangeHandler(
    "daysColor",
    setDaysColor
  );
  const handleDecimalsColorChange = createColorChangeHandler(
    "decimalsColor",
    setDecimalsColor
  );
  const handleDaysTextColorChange = createColorChangeHandler(
    "daysTextColor",
    setDaysTextColor
  );
  const handleDeadlineTextColorChange = createColorChangeHandler(
    "deadlineTextColor",
    setDeadlineTextColor
  );

  return (
    <main className="min-h-screen flex flex-col md:flex-row relative">
      <div className="md:min-h-screen flex flex-col md:items-center md:justify-center md:p-24 p-12 text-slate-800 bg-slate-100 md:w-1/2 xl:w-2/3">
        <p className="text-xl mt-4">1. Select a date:</p>
        <div className="w-full md:w-96 mt-2">
          <Datepicker
            asSingle={true}
            useRange={false}
            value={dateValue}
            onChange={handleDateChange}
          />
        </div>
        <p className="text-xl mt-4">2. Select a specific time:</p>
        <p className="text-sm">(optional, defaults to midnight if not set):</p>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="border border-gray-300 rounded-md p-2 mt-2 w-full md:w-96"
        />
        <p className="text-xl mt-4">3. Add a description:</p>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="e.g. My super important event"
          className="border border-gray-300 rounded-md p-2 mt-2 md:w-96"
        />
      </div>

      <div className="md:fixed md:h-full md:right-0 md:top-0 md:w-1/2 xl:w-1/3 bg-white md:shadow-lg flex flex-col">
        <ColorPickerSection
          backgroundColor={backgroundColor}
          setBackgroundColor={handleBackgroundColorChange}
          daysColor={daysColor}
          setDaysColor={handleDaysColorChange}
          decimalsColor={decimalsColor}
          setDecimalsColor={handleDecimalsColorChange}
          daysTextColor={daysTextColor}
          setDaysTextColor={handleDaysTextColorChange}
          deadlineTextColor={deadlineTextColor}
          setDeadlineTextColor={handleDeadlineTextColorChange}
          setSettings={setSettings}
          selectedPreset={settings.selectedPreset}
        />

        <LivePreview
          backgroundColor={backgroundColor}
          daysColor={daysColor}
          decimalsColor={decimalsColor}
          daysTextColor={daysTextColor}
          deadlineTextColor={deadlineTextColor}
        />
      </div>
      <div className="fixed bottom-0 left-0 p-2 text-gray-500 bg-white flex justify-center items-center rounded-tr-lg text-sm">
        <a
          href="https://www.linkedin.com/in/danielcarmonaserrat/"
          className=""
          target="_blank"
        >
          Created by <span className="underline">Daniel Carmona Serrat</span>
        </a>
      </div>
    </main>
  );
};
export default Options;
