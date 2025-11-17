import k from "./utils/kaplayCtx";

import gameScene from "./scenes/game.ts";
import mainMenuScene from "./scenes/mainMenu.ts";


import beat1 from "./assets/sounds/beat2.wav";

loadSound("bgMusic", beat1);

play("bgMusic", { loop: true, volume: 0.1 });

k.setLayers([
  "bg",
  "shop",
  "player",
  "coins"
], "bg");


k.scene("mainMenu", mainMenuScene);

k.scene("game", gameScene);
k.go("mainMenu", );