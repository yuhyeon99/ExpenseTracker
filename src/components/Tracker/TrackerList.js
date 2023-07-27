import React,{useState, useEffect} from 'react';
import './TrackerList.css';
import ItemList from '../Item/ItemList';
import ListFilter from '../Filter/ListFilter';
import { useSetRecoilState } from 'recoil';
import { NewItemAtom } from '../../recoil/AtomList';
const TrackerList = () => {

    const openNewItemBtn = useSetRecoilState(NewItemAtom);
    const [listShowType, setListShowType] = useState("전체 내역");

    const handleListTypeClick = (type) => {
        setListShowType(type);
    };
    return(
        <div className="tracker-list">
            <div className="list-type">
                <div>
                    <p className={listShowType === "전체 내역" ? "active" : ""} onClick={() => handleListTypeClick("전체 내역")}>전체 내역</p>
                    <p className={listShowType === "들어온 돈" ? "active" : ""} onClick={() => handleListTypeClick("들어온 돈")}>수입</p>
                    <p className={listShowType === "나간 돈" ? "active" : ""} onClick={() => handleListTypeClick("나간 돈")}>지출</p>
                </div>
                <ListFilter/>
            </div>
            <ItemList listShowType={listShowType}/>
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