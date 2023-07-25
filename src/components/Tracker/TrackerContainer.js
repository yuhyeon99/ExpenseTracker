import React,{useState, useEffect} from 'react';
import TrackerStatus from './TrackerStatus';
import TrackerList from './TrackerList';
import NewItemContainer from '../Item/NewItemContainer';
import { useRecoilValue } from 'recoil';
import { NewItemAtom } from '../../recoil/AtomList';

const TrackerContainer = () => {

    const NewItemValue = useRecoilValue(NewItemAtom);
    
    return (
        <div className="container">
            <div className="inner-container">
                <TrackerStatus/>
                <TrackerList/>

                {NewItemValue ? (
                    <NewItemContainer/>
                ) : (
                    <></>
                )}
                
            </div>
        </div>
    );
}

export default TrackerContainer;