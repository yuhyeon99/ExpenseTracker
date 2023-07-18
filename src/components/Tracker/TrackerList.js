import React,{useState, useEffect} from 'react';

import './TrackerList.css';

const TrackerList = () => {

    return(
        <div className="tracker-list">
            <div className="list-type">
                <p className="active">전체 내역</p>
                <p>수입</p>
                <p>지출</p>
            </div>
            <div className="list-items">
                <div>
                    <img src="/img/new_list.png" alt="new_list" />
                    <p>새 거래 내역을 추가하세요</p>
                </div>
            </div>
            
        </div>
    );
}

export default TrackerList;