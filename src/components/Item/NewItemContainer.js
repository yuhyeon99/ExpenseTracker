import React,{useState, useEffect} from 'react';
import './NewItemContainer.css';
import { useSetRecoilState } from 'recoil';
import { ItemAtom } from '../../recoil/ItemAtom';

const NewItemContainer = () => {

    const setItems = useSetRecoilState(ItemAtom);
    const [newItem, setNewItem] = useState({
        year: '',
        month: '',
        day: '',
        type : '',
        description : '',
        amount : ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name] : value,
        }));
    };

    const handleAddItem = () => {
        // atom에 추가해주는 코드
        setItems((prevItems) => [...prevItems, newItem]);

        // localStorage에 추가해주는 코드
        const storedItems = JSON.parse(localStorage.getItem('ItemAtom')) || [];
        const updateItems = [...storedItems, newItem];
        localStorage.setItem('ItemAtom', JSON.stringify(updateItems));

        setNewItem({
            year: '',
            month: '',
            day: '',
            type : '',
            description : '',
            amount : '',
        });
    }

    return(
        <div className="new-item-container">
            <div className="border-block"></div>
            <div className="block-title">
                <p>새로운 거래</p>
            </div>
            <div className="new-item-form">
                <div><p>날짜</p></div>
                <div className="form-date">
                    <input type="text" name="year" value={newItem.year} onChange={handleInputChange} placeHolder="2023" />
                    <input type="text" name="month" value={newItem.month} onChange={handleInputChange} placeHolder="03" />
                    <input type="text" name="day" value={newItem.day} onChange={handleInputChange} placeHolder="01" />
                </div>
                <div>
                    <p>내용</p>
                </div>
                <div className="form-inout">
                    <input
                     type="button" 
                     value="들어온 돈" 
                     className={newItem.type === '들어온 돈' ? 'active' : ''}
                     onClick={() => setNewItem((prevItem) => ({...prevItem, type : '들어온 돈'}))}
                    />
                    <input
                     type="button" 
                     value="나간 돈" 
                     className={newItem.type === '나간 돈' ? 'active' : ''}
                     onClick={() => setNewItem((prevItem) => ({...prevItem, type: '나간 돈'}))}
                    />
                </div>
                <div className="form-text">
                    <input type="text" name="description" value={newItem.description} onChange={handleInputChange} placeHolder="내용을 입력하세요(예: 망고간식비)" />
                </div>
                <div>
                    <p>금액</p>
                </div>
                <div className="form-price">
                    <input type="text" name="amount" value={newItem.amount} onChange={handleInputChange} placeHolder="금액을 입력하세요(예: 12000)" />
                </div>
                <div className="form-button-submit">
                    <input type="button" value="입력하기" onClick={handleAddItem} />
                </div>
                <div className="form-button-close">
                    <input type="button" value="닫기" />
                </div>
            </div>
        </div>
    );
}

export default NewItemContainer;