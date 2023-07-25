import React, {useState, useEffect} from "react";
import { atom, useRecoilValue } from 'recoil';


import TrackerContainer from './components/Tracker/TrackerContainer';
import {ItemAtom, updateLocalStorage} from './recoil/AtomList';

function App() {

  const newItem = useRecoilValue(ItemAtom);
  
  useEffect(() => {
    updateLocalStorage(newItem);
  }, [newItem]);

  return (
    <TrackerContainer />
  );
}

export default App;