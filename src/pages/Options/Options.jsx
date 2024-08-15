import React from "react";
import { useSettingsStore } from "./../../common/useSettingsStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Options = () => {
  const [settings, setSettings] = useSettingsStore();
  // countdownDate logic
  const countdownDate = Date.parse(settings.countdownDate);
  const handleDateChange = (date) => {
    setSettings((prevState) => {
      return {
        ...prevState,
        countdownDate: new Date(date).toString(),
      };
    });
  };
  // display text logic
  const countdownText = settings.countdownText;
  const handleDisplayTextChange = (e) => {
    setSettings((prevState) => {
      return {
        ...prevState,
        countdownText: e.target.value,
      };
    });
  };
  // console.log('settings', settings);

  return (
    <div className="h-full">
      <div className="p-5">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div>
                <h2 className="text-xl font-medium leading-6 text-gray-900">
                  Countdown
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personalize the start date and the message to display
                </p>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="Date"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Date
                  </label>
                  <DatePicker
                    selected={countdownDate}
                    onChange={(date) => handleDateChange(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Display text
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={countdownText}
                      onChange={(e) => handleDisplayTextChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Options;
