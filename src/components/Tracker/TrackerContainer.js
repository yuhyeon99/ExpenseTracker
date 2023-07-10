import React,{useState, useEffect} from 'react';
import TrackerStatus from './TrackerStatus';
import TrackerList from './TrackerList';
import NewItemContainer from '../Item/NewItemContainer';

const TrackerContainer = () => {

    return (
        <div className="container">
            <div className="inner-container">
                <TrackerStatus/>
                <TrackerList/>
                <NewItemContainer/>
            </div>
        </div>
    );
}

export default TrackerContainer;