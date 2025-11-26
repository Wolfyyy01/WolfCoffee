import { coinsAtom, currentSceneAtom, store, upgradeMenuVisibleAtom, upgradesAtom, multiplierAtom } from "../utils/atoms";
import { saveGame } from "../utils/functiions";
import { coinSoundPlay } from "../utils/sounds";
import { bgSprite, coffeeMachineSprite, coinSprite, playerSprite, shopSprite } from "../utils/sprites";

export default function gameScene() {
  add(bgSprite)
  add(shopSprite);
  add(playerSprite);
  add(coinSprite)

  let coffeeMachineObj = add(coffeeMachineSprite("coffeeMachine1"));

  function updateMachine() {
    const upgrades = store.get(upgradesAtom);
    const sprite = upgrades.coffeeMachine >= 2 ? "coffeeMachine2" : "coffeeMachine1";
    coffeeMachineObj.destroy();
    coffeeMachineObj = add(coffeeMachineSprite(sprite));
  }

  updateMachine();

  store.sub(upgradesAtom, updateMachine);

  loop(2, () => {
    const multiplier = store.get(multiplierAtom);
    const newCoins = store.get(coinsAtom) + multiplier;
    store.set(coinsAtom, newCoins);

    coinSoundPlay();

    add([
      text(`+${multiplier}`, { font: "Consolas", size: 80 }),
      pos(rand(0, 800), rand(0, 600)),
      scale(0.5),
      opacity(1),
      lifespan(0.5, { fade: 0.5 })
    ]);
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
