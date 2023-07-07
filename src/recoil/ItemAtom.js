import { atom } from "recoil";

export const ItemAtom = atom({
    key : 'ItemAtom',
    default : JSON.parse(localStorage.getItem('ItemAtom')) || []
});

ItemAtom.subscribe((newItems)=>{
    localStorage.setItem('ItemAtom', JSON.stringify(newItems));
});