import React, {useState, useEffect} from "react";
import { atom } from 'recoil';

import './App.css';
import TrackerStatus from './components/TrackerContainer';
import ItemAtom from './recoil/ItemAtoms';

function App() {

  const Item = useRecoilValue(ItemAtom);

  useEffect(()=>{

  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
