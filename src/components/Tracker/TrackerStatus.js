import React,{useState, useEffect} from 'react';
import recoil from 'recoil';
import "./TrackerStatus.css";

const TrackerStatus = () => {

    return(
        <div className="tracker_status">
            <div className="status_header">
                <p>작심소비</p>
            </div>

            <div className="status_about">
                <img src="/img/logo.png"/>
                <p>안녕하세요!</p>
                <p>지난 1개월 간의 거래 내역을</p>
                <p>확인해보세요.</p>
                <p className="money">&#8361;0</p>

                <div className="about_box">
                    <ul>
                        <li className="box_in">
                            <p>들어온 돈</p>
                            <p className="box_money">0</p>
                        </li>
                        <li className="box_border"></li>
                        <li className="box_out">
                            <p>나간 돈</p>
                            <p className="box_money">-0</p>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="border-block"></div>
        </div>
    );
}

export default TrackerStatus;