import React,{useState, useEffect} from 'react';
import './ItemList.css';

const ItemList = () => {

    return(
        <div className="ItemList">
            <div className="item">
                <div className="item-info">
                    <p>2023. 07. 22</p>
                    <p>알바비</p>
                </div>
                <div className="item-money">
                    <p> +800,000 </p>
                </div>
            </div>
        </div>
    );
}

export default ItemList;