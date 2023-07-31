import React,{useState, useEffect} from 'react';
import './ItemList.css';
import { useRecoilValue,useRecoilState } from 'recoil';
import { ItemAtom, FilterAtom } from '../../recoil/AtomList';

const ItemList = ({listShowType}) => {
    const [items, setItems] = useRecoilState(ItemAtom);
    const selectedMonth = useRecoilValue(FilterAtom);

    const filteredItems = items.filter((item)=>{
        const itemDate = new Date(item.year, item.month -1, item.day);
        return itemDate.getMonth() === selectedMonth.getMonth() &&
                itemDate.getFullYear() === selectedMonth.getFullYear();
    });

    // 최근 날짜순으로 정렬하는 코드
    filteredItems.sort((a, b) => {
        const dateA = new Date(a.year, a.month - 1, a.day);
        const dateB = new Date(b.year, b.month - 1, b.day);
        return dateB - dateA;
    });

    // 전체, 들어온 돈, 나간 돈 검색해서 정렬
    const filteredByType = listShowType === "전체 내역"
    ? filteredItems
    : filteredItems.filter((item) => item.type === listShowType);
    

    // 아이템 삭제
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleItemMouseEnter = (index) => {
        setHoveredItem(index);
    };
    const handleItemMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleDeleteItem = (index) => {
        // 해당 아이템 삭제
        const updatedItems = [...filteredByType];
        updatedItems.splice(index, 1);
        setItems(updatedItems);

        // localStorage에 반영
        localStorage.setItem('ItemAtom', JSON.stringify(updatedItems));
    };

    // 더보기 구현
    const [showAll, setShowAll] = useState(false);
    const showItemCount = showAll ? filteredByType.length : 5;
    const handleShowAll = () => {
        setShowAll(true);
    };
    
    return(
        <div className="ItemList">
            {filteredByType.length === 0 ? (
                // 여기에 내역이 없을 때 보여줄 레이아웃 추가해야함.
                <></>
            ) : (
                <>
                {filteredByType.slice(0, showItemCount).map((item, index) => (
                    <div 
                        className={`item ${hoveredItem === index ? 'hovered' : ''}`} 
                        key={index}
                        onMouseEnter={() => handleItemMouseEnter(index)}
                        onMouseLeave={handleItemMouseLeave}
                    >
                        <div className="item-info">
                            <p className="info-date">{item.year}. {item.month}. {item.day}</p>
                            <p className="info-title">{item.description}</p>
                        </div>
                        <div className="item-money">
                            {item.type === "들어온 돈" ? (
                                <p className="money-plus"> +{parseInt(item.amount).toLocaleString()} </p>
                            ) : (
                                <p className="money-minus"> -{parseInt(item.amount).toLocaleString()} </p>
                            )}
                        </div>
                        {hoveredItem === index && (
                            <button className="delete-btn" onClick={() => handleDeleteItem(index)}>
                            삭제
                            </button>
                        )}
                    </div>
                ))}
                {!showAll && filteredByType.length > 5 && (
                    <button className="showAllBtn" onClick={handleShowAll}>더보기</button>
                )}
                </>
            )}
        </div>
    );
}

export default ItemList;