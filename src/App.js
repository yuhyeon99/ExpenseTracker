import React, {useState, useEffect} from "react";
import { atom } from 'recoil';

import './App.css';
import TrackerContainer from './components/TrackerContainer';
import ItemAtom from './recoil/ItemAtoms';

function App() {

  const item = useRecoilValue(ItemAtom);

  useEffect(()=>{

  }, []);

  return (
    <TrackerContainer items={item} />
  );
}

export default App;
