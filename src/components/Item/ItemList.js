import React,{useState, useEffect} from 'react';
import './ItemList.css';
import { useRecoilValue } from 'recoil';
import { ItemAtom, FilterAtom } from '../../recoil/AtomList';

const ItemList = () => {
    const items = useRecoilValue(ItemAtom);
    const selectedMonth = useRecoilValue(FilterAtom);

    const filteredItems = items.filter((item)=>{
        const itemDate = new Date(item.year, item.month -1, item.day);
        return itemDate.getMonth() === selectedMonth.getMonth() &&
                itemDate.getFullYear() === selectedMonth.getFullYear();
    });
    
    return(
        <div className="ItemList">
            {items.length === 0 ? (
                // 여기에 내역이 없을 때 보여줄 레이아웃 추가해야함.
                <></>
            ) : (
                filteredItems.map((item, index) => (
                    <div className="item">
                        <div className="item-info">
                            <p className="info-date">{item.year}. {item.month}. {item.day}</p>
                            <p className="info-title">{item.description}</p>
                        </div>
                        <div className="item-money">
                            <p className="money-plus"> +{parseInt(item.amount).toLocaleString()} </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ItemList;