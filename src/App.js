import React, {useState, useEffect} from "react";
import { atom, useRecoilValue } from 'recoil';


import TrackerContainer from './components/Tracker/TrackerContainer';
import {ItemAtom, updateLocalStorage} from './recoil/ItemAtom';

function App() {

  useEffect(() => {
    updateLocalStorage(ItemAtom);
  }, [ItemAtom]);

  return (
    <TrackerContainer />
  );
}

export default App;
