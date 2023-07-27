import React,{useState, useEffect} from 'react';
import {recoil , useRecoilValue} from 'recoil';
import { ItemAtom, FilterAtom } from '../../recoil/AtomList';
import "./TrackerStatus.css";

const TrackerStatus = () => {
    const items = useRecoilValue(ItemAtom);
    const selectedMonth = useRecoilValue(FilterAtom);

    const filteredItems = items.filter((item)=>{
        const itemDate = new Date(item.year, item.month -1, item.day);
        return itemDate.getMonth() === selectedMonth.getMonth() &&
                itemDate.getFullYear() === selectedMonth.getFullYear();
    });
    let amount_in = 0;
    let amount_out = 0;

    filteredItems.map((item, index)=>{
        console.log(item.type);
        if(item.type === "나간 돈"){
            amount_out += parseInt(item.amount);
        }else if(item.type === "들어온 돈"){
            amount_in += parseInt(item.amount);
        }
    });

    const amount_total = amount_in - amount_out;

    return(
        <div className="tracker_status">
            <div className="status_header">
                <p>작심소비</p>
            </div>

            <div className="status_about">
                <img src="/img/logo.png"/>
                <p>안녕하세요!</p>
                <p>월별 거래 내역을</p>
                <p>확인해보세요.</p>
                <p className="money">
                    
                    {(amount_total > 0) ? (
                       <span style={{ color: "#0d6e98" }}>&#8361; {amount_total.toLocaleString()}</span>
                    ) : amount_total < 0 ? (
                       <span style={{ color: "#d94a3b" }}>&#8361; -{Math.abs(amount_total).toLocaleString()}</span>
                    ) : (
                        <span style={{ color: "#000" }}>&#8361; 0</span>
                    )}
                </p>

                <div className="about_box">
                    <ul>
                        <li className="box_in">
                            <p>들어온 돈</p>
                            <p className="box_money">{amount_in.toLocaleString()}</p>
                        </li>
                        <li className="box_border"></li>
                        <li className="box_out">
                            <p>나간 돈</p>
                            <p className="box_money">-{amount_out.toLocaleString()}</p>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="border-block"></div>
        </div>
    );
}

export default TrackerStatus;