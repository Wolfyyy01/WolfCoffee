import k from "./utils/kaplayCtx";

import gameScene from "./scenes/game.ts";
import mainMenuScene from "./scenes/mainMenu.ts";

import {  currentSceneAtom, store } from "./utils/atoms.ts";


loadSound("bgMusic", "./assets/sounds/beat2.wav");

play("bgMusic", { loop: true, volume: 0.1 });

k.setLayers([
  "bg",
  "shop",
  "player",
  "coffeeMachine",
  "coins"
], "bg");



let prev = store.get(currentSceneAtom);
console.log("prev", prev);

store.sub(currentSceneAtom, () => {
  const nextScene = store.get(currentSceneAtom);
  console.log("nextScene", nextScene);
  if (nextScene !== prev) {
    prev = nextScene;
    k.go(nextScene); 
  }
});

k.scene("mainMenu", mainMenuScene);
k.scene("game", gameScene);

k.go("mainMenu" );
