import { coinsAtom, currentSceneAtom, store, upgradeMenuVisibleAtom, upgradesAtom, multiplierAtom } from "../utils/atoms";
import { saveGame } from "../utils/functiions";
import { coinSoundPlay } from "../utils/sounds";
import { bgSprite, coffeeMachineSprite, coinSprite, playerSprite, shopSprite } from "../utils/sprites";

export default function gameScene() {
  add(bgSprite);
  let shopObj = add(shopSprite("shop1"));
  let playerObj = add(playerSprite("player1"));
  add(coinSprite);

  let loopTime = 2

  let coffeeMachineObj = add(coffeeMachineSprite("coffeeMachine1"));

  function updateMachine() {
    const upgrades = store.get(upgradesAtom);
    const level = upgrades.coffeeMachine;
    let spriteName = "coffeeMachine1";

    if (level >= 5) {
      spriteName = "coffeeMachine5";
    } else if (level >= 4) {
      spriteName = "coffeeMachine4";
    } else if (level >= 3) {
      spriteName = "coffeeMachine3";
    } else if (level >= 2) {
      spriteName = "coffeeMachine2";
    }

    coffeeMachineObj.destroy();
    coffeeMachineObj = add(coffeeMachineSprite(spriteName));
  }

  function updateShop() {
    const upgrades = store.get(upgradesAtom);
    const level = upgrades.shop;
    let spriteName = "shop1";

    if (level >= 3) {
      spriteName = "shop3";
    } else if (level >= 2) {
      spriteName = "shop2";
    }

    shopObj.destroy();
    shopObj = add(shopSprite(spriteName));
  }

  function updatePlayer() {
    const upgrades = store.get(upgradesAtom);
    const level = upgrades.player;
    let spriteName = "player1";

    if (level >= 3) {
      spriteName = "player3";
    } else if (level >= 2) {
      spriteName = "player2";
    }

    loopTime = 2 * (1 - ((level * 5)/ 100))

    playerObj.destroy();
    playerObj = add(playerSprite(spriteName));
  }

  updateMachine();
  updateShop();
  updatePlayer();

  console.log(loopTime);

  store.sub(upgradesAtom, () => {
    updateMachine();
    updateShop();
    updatePlayer();
  });

  loop(loopTime, () => {
    const upgrades = store.get(upgradesAtom);
    const playerLevel = upgrades.player;
    const loopTime = 2 / Math.max(1, playerLevel);

    const multiplier = store.get(multiplierAtom);
    const newCoins = store.get(coinsAtom) + multiplier;
    store.set(coinsAtom, newCoins);

    coinSoundPlay();

    add([
      text(`+${multiplier}`, { font: "Consolas", size: 80 }),
      pos(rand(0, 800), rand(0, 600)),
      scale(0.5),
      opacity(1),
      lifespan(0.5, { fade: 0.5 }),
      layer('coins')
    ]);

    return loopTime;
  });

  onKeyPress('u', () => store.set(upgradeMenuVisibleAtom, !store.get(upgradeMenuVisibleAtom)));
  onKeyPress('escape', () => store.set(currentSceneAtom, 'mainMenu'));

  onKeyPress('s', async () => {
    saveGame({
      coin: store.get(coinsAtom),
      upgrades: store.get(upgradesAtom)
    });
  });
}
