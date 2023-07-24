import React,{useState, useEffect} from 'react';
import './ItemList.css';
import { useRecoilValue } from 'recoil';
import { ItemAtom } from '../../recoil/ItemAtom';

const ItemList = () => {
    const items = useRecoilValue(ItemAtom);
    return(
        <div className="ItemList">
            {items.length === 0 ? (
                <></>
            ) : (
                items.map((item, index) => (
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