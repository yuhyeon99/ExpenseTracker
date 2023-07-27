import React,{useState, useEffect, useRef } from 'react';
import './NewItemContainer.css';
import { useSetRecoilState } from 'recoil';
import { ItemAtom } from '../../recoil/AtomList';
import { NewItemAtom } from '../../recoil/AtomList';
    
const NewItemContainer = () => {

    const setItems = useSetRecoilState(ItemAtom);
    const closeNewItemBtn = useSetRecoilState(NewItemAtom);

    const yearInputRef = useRef(null);
    const monthInputRef = useRef(null);
    const dayInputRef = useRef(null);

    const MAX_DESCRIPTION_LENGTH = 20; // 최대 글자 수

    // 현재 글자수 계산 함수
    const getCurrentCharacterCount = (text) => {
      return text.length;
    };

    // 날짜 유효성 검사
    const isDateValid = (year, month, day) => {
        const date = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        // !isNaN(date) => 날짜가 유효한지 확인하는 로직
        return !isNaN(date) && date <= today;
    };

    // 타입 유효성 검사
    const isTypeSelected = (type) => {
        return type === '들어온 돈' || type === '나간 돈';
    };

    // 금액 유효성 검사
    const isAmountValid = (amount) => /^\d+$/.test(amount);

    // 내용 유효성 검사 함수
    const isDescriptionValid = (desc) => desc.trim() !== '' && desc.length <= 20;

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

        // 년도 입력 시 월 인풋 창으로 포커스 이동
        if (name === 'year' && value.length === 4) {
            monthInputRef.current.focus();
        }
    
        // 월 입력 시 일 인풋 창으로 포커스 이동
        if (name === 'month' && value.length === 2) {
            dayInputRef.current.focus();
        }
    };

    const handleAddItem = () => {

        // 날짜 입력 값이 유효한지 검사
        if(!isDateValid(newItem.year, newItem.month, newItem.day)){
            alert('오늘 이후 날짜를 선택할 수 없습니다.');
            return;
        }

        // 타입 입력 값이 유효한지 검사
        if (!isTypeSelected(newItem.type)) {
            alert('거래 타입을 선택해주세요. (들어온 돈 또는 나간 돈)');
            return;
        }

        // 내용 값이 유효한지 검사
        if(!isDescriptionValid(newItem.description)){
            alert('내용은 공백 없이 20자 이내로 입력해주세요.');
            return;
        }

        // 금액이 비어있는 경우
        if (newItem.amount.trim() === '') {
            alert('금액을 입력해주세요.');
            return;
        }

         // 금액 입력 값이 유효한지 검사
        if (!isAmountValid(newItem.amount)) {
            alert('금액은 숫자만 입력 가능합니다.');
            return;
        }
    
        
  

        // atom에 추가해주는 코드
        setItems((prevItems) => [newItem, ...prevItems]);

        // localStorage에 추가해주는 코드
        const storedItems = JSON.parse(localStorage.getItem('ItemAtom')) || [];
        const updateItems = [newItem, ...storedItems];
        localStorage.setItem('ItemAtom', JSON.stringify(updateItems));

        setNewItem({
            year: '',
            month: '',
            day: '',
            type : '',
            description : '',
            amount : '',
        });
        closeNewItemBtn(false);
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
                    <input ref={yearInputRef} type="text" name="year" value={newItem.year} onChange={handleInputChange} placeHolder="년(ex:2023)" />
                    <input ref={monthInputRef} type="text" name="month" value={newItem.month} onChange={handleInputChange} placeHolder="월(ex:03)" />
                    <input ref={dayInputRef} type="text" name="day" value={newItem.day} onChange={handleInputChange} placeHolder="일(ex:01)" />
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
                    <input type="text" name="description" value={newItem.description} onChange={handleInputChange} placeHolder="내용을 입력하세요(예: 출근버스비)" />    
                </div>
                <div className="character-count">
                    {getCurrentCharacterCount(newItem.description)} / {MAX_DESCRIPTION_LENGTH}
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
                    <input type="button" value="닫기" onClick={()=>closeNewItemBtn(false)} />
                </div>
            </div>
        </div>
    );
}

export default NewItemContainer;