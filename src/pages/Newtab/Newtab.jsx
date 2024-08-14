import React from 'react';
import Header from '../../containers/Header';
import { useSettingsStore } from '../../common/useSettingsStore';
import Countdown from './Countdown';
import Pizza from './Pizza';

const Newtab = () => {
  const [settings] = useSettingsStore();
  const activePage = settings.activePage;
  return (
    <>
      <div className="h-screen text-slate-800 bg-slate-100">
        <Header />

        {activePage === 'countdown' && <Countdown />}
        {activePage === 'pizza' && <Pizza />}
      </div>
    </>
  );
};

export default Newtab;
