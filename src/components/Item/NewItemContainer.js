import React,{useState, useEffect} from 'react';
import './NewItemContainer.css';

const NewItemContainer = () => {

    return(
        <div className="new-item-container">
            <div className="border-block"></div>
            <div className="block-title">
                <p>새로운 거래</p>
            </div>
            <div className="new-item-form">
                <div><p>날짜</p></div>
                <div className="form-date">
                    <input type="text" placeHolder="2023" />
                    <input type="text" placeHolder="03" />
                    <input type="text" placeHolder="01" />
                </div>
                <div>
                    <p>내용</p>
                </div>
                <div className="form-inout">
                    <input type="button" value="들어온 돈" />
                    <input type="button" value="나간 돈" />
                </div>
                <div className="form-text">
                    <input type="text" placeHolder="내용을 입력하세요(예: 망고간식비)" />
                </div>
                <div>
                    <p>금액</p>
                </div>
                <div className="form-price">
                    <input type="text" placeHolder="금액을 입력하세요(예: 12000)" />
                </div>
                <div className="form-button-submit">
                    <input type="button" value="입력하기" />
                </div>
                <div className="form-button-close">
                    <input type="button" value="닫기" />
                </div>
            </div>
        </div>
    );
}

export default NewItemContainer;