import { atom } from "recoil";

// items atom
const initialItems = JSON.parse(localStorage.getItem('ItemAtom')) || [];
export const ItemAtom = atom({
    key : 'ItemAtom',
    default : initialItems
});
// items localstorage update function
export function updateLocalStorage(newItems) {
    localStorage.setItem('ItemAtom', JSON.stringify(newItems));
}

// filter date atom
const today = new Date();
export const FilterAtom = atom({
    key: 'FilterAtom',
    default : today
})

// NewItemContainer 여부
export const NewItemAtom = atom({
    key : 'NewItemAtom',
    default : false
})