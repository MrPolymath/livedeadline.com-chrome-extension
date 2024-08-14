import { createChromeStorageStateHookLocal } from 'use-chrome-storage';

const SETTINGS_KEY = 'settings';
const INITIAL_VALUE = {
  activePage: 'countdown',
  // countdown settings
  countdownDate: new Date().toString(),
  countdownText: 'Countdown placeholder text',
  // pizza settings
};

export const useSettingsStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE
);
