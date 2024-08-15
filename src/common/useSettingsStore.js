import { createChromeStorageStateHookLocal } from "use-chrome-storage";

const SETTINGS_KEY = "settings";
const INITIAL_VALUE = {
  countdownText: "Custom Countdown",
  countdownEndTime: Date.now() + 1000 * 60 * 60 * 24 * 6,
  backgroundColor: "#F6F6EF",
  daysColor: "#f0652f",
  decimalsColor: "#fda942",
  daysTextColor: "#000000",
  deadlineTextColor: "#108AD2",
};

export const useSettingsStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE
);
