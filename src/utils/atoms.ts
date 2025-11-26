import { createStore } from "jotai";
import { atom } from "jotai";

export const store = createStore();

export const currentSceneAtom = atom('mainMenu');
export const currentSceneDataAtom = atom<any>(null);

export const isGameLoadedAtom = atom(false);

export const coinsAtom = atom(0);
export const upgradesAtom = atom({
  coffeeMachine: 1,
  shop: 1,
  player: 1,
  productionBoost: 0,
});
export const multiplierAtom = atom((get) => {
  const upgrades = get(upgradesAtom);
  let m = 1;

  if (upgrades.coffeeMachine >= 2) m += 1;
  if (upgrades.coffeeMachine >= 4) m += 1;
  if (upgrades.coffeeMachine >= 6) m += 2;

  return m;
});


export const upgradeMenuVisibleAtom = atom(false);