import React from "react";
import "./Popup.css";

const Popup = () => {
  const openOptionsPage = () => {
    // Opens the options page
    chrome.runtime.openOptionsPage();
  };

  return (
    <div className="bg-slate-100 p-6 w-96">
      <h1 className="text-xl">Live Deadline</h1>
      <p>
        To set up your countdown, go to the options page by clicking the button
        below:
      </p>
      <button
        onClick={openOptionsPage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Open Options
      </button>
    </div>
  );
};

export default Popup;
