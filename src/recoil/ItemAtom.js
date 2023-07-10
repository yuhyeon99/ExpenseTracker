import { atom } from "recoil";

const initialItems = JSON.parse(localStorage.getItem('ItemAtom')) || [];

export const ItemAtom = atom({
    key : 'ItemAtom',
    default : initialItems
});
// 한 객체당 (날짜, 제목, 수입|지출여부, 금액)

export function updateLocalStorage(newItems) {
    localStorage.setItem('ItemAtom', JSON.stringify(newItems));
}