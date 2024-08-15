import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="App">
      {/* Tell user to go to the options page to edit the countdown */}
      <h1>Live Deadline</h1>
      <p>
        To set up your countdown, go to the options page by clicking the
        extension icon.
      </p>
    </div>
  );
};

export default Popup;
