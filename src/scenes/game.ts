
import {  saveGame } from "../utils/functiions";
import { coinSoundPlay } from "../utils/sounds";
import { bgSprite, coffeeMachineSprite, playerSprite, shopSprite } from "../utils/sprites";

export default function gameScene({ data }: { data?: { coin: number, multiplier: number, upgrades: {coffeeMachine: number} } }) {
  let coins = data?.coin || 0;
  let multiplier = data?.multiplier || 1;
  let coffee_machine_tier = data?.upgrades.coffeeMachine || 1;

  let coffeeMachineSprites = [
    "coffeeMachine1",
    "coffeeMachine1",
  ]

  let coffeeMachine;

  const coinText = add([
    text(`Coins: ${coins}`, { font: "Consolas", size: 100 }),
    pos(20, 20),
    layer("coins"),
    scale(0.5)
  ])

  if (coffee_machine_tier === 1) {
   coffeeMachine = coffeeMachineSprites[0];
  } else if (coffee_machine_tier === 2) {
   coffeeMachine = coffeeMachineSprites[1];
   multiplier += 1;
  }


  add(bgSprite)
  add(shopSprite);
  add(playerSprite);
  add(coffeeMachineSprite(coffeeMachine));
  const up = add([text("upgrade multiplier: S"), pos(600, 500), scale(0.5), layer("coins"), area(), outline(4)]);

  up.onClick(() => {
    if (coins >= 10) {
      coins -= 10;
      coffee_machine_tier += 1;
      coinText.text = `Coins: ${coins}`;
      console.log("Multiplier upgraded to " + multiplier);
    }
  });

setInterval(() => {
    coins += multiplier;
    coinText.text = `Coins: ${coins}`;

    coinSoundPlay();

    add([
      text(`+${multiplier}`, { font: "Consolas", size: 80 }),
      pos(Math.floor(rand(0, 800)), Math.floor(rand(0, 600))),
      layer("coins"),
      scale(0.5),
      opacity(1),
      lifespan(0.5, { fade: 0.5 })
    ]);
  }, 2000);
  
  onKeyPress('escape', () => {
    go("mainMenu");
  });

  onKeyPress('s', async () => {
    saveGame({ coin: coins, multiplier: multiplier, upgrades: {coffeeMachine: coffee_machine_tier} });
  });
}