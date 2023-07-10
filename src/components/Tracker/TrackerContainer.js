import React,{useState, useEffect} from 'react';
import TrackerStatus from 'TrackerStatus';

const TrackerContainer = () => {

    return (
        <div className="">
            <TrackerStatus/>
            <TrackerList/>
            <NewItemContainer/>
        </div>
    );
}

export default TrackerContainer;