import React from "react";
import { useSettingsStore } from "../../common/useSettingsStore";
import Countdown from "./Countdown";

const Newtab = () => {
  const [settings] = useSettingsStore();
  // const activePage = settings.activePage;
  return (
    <>
      <div className="h-screen text-slate-800 bg-slate-100">
        <Countdown />
      </div>
    </>
  );
};

export default Newtab;
