import { atom } from "recoil";

export const ItemAtom = atom({
    key : 'ItemAtom',
    default : JSON.parse(localStorage.getItem('ItemAtom')) || []
});
// 한 객체당 (날짜, 제목, 수입|지출여부, 금액)
ItemAtom.subscribe((newItems)=>{
    localStorage.setItem('ItemAtom', JSON.stringify(newItems));
});