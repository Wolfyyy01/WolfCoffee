import { createStore } from "jotai";
import { atom } from "jotai";

export const store = createStore();

export const currentSceneAtom = atom('mainMenu');
export const currentSceneDataAtom = atom<any>(null);

export const isGameLoadedAtom = atom(false);

export const coinsAtom = atom(0);