import React,{useState, useEffect} from 'react';
import './TrackerList.css';
import ItemList from '../Item/ItemList';
import ListFilter from '../Filter/ListFilter';
import { useSetRecoilState } from 'recoil';
import { NewItemAtom } from '../../recoil/AtomList';
const TrackerList = () => {

    const openNewItemBtn = useSetRecoilState(NewItemAtom);

    return(
        <div className="tracker-list">
            <div className="list-type">
                <div>
                    <p className="active">전체 내역</p>
                    <p>수입</p>
                    <p>지출</p>
                </div>
                <ListFilter/>
            </div>
            <ItemList/>
            <div className="add-items" onClick={()=>openNewItemBtn(true)}>
                <div>
                    <img src="/img/new_list.png" alt="new_list" />
                    <p>새 거래 내역을 추가하세요</p>
                </div>
            </div>
            
        </div>
    );
}

export default TrackerList;