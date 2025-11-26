import { useAtom, useSetAtom } from 'jotai';
import { coinsAtom, currentSceneAtom, isGameLoadedAtom, upgradesAtom } from '../../utils/atoms';
import Button from '../../components/mainMenu/Button';
import { loadGame } from '../../utils/functiions';

const MainMenu = () => {
  const [loading] = useAtom(isGameLoadedAtom);
  const setUpgrades = useSetAtom(upgradesAtom);
  const setCoins = useSetAtom(coinsAtom);
  const setScene = useSetAtom(currentSceneAtom);



  const newGame = () => {

    setUpgrades({

      coffeeMachine: 1,
      shop: 1,
      player: 1,
      productionBoost: 0,

    });
    setCoins(0);
    setScene("game");

    const canvas = document.getElementById("gameCanvas");
    if (canvas) canvas.focus();
  };

  const loadGameBtn = async () => {
    const data = await loadGame();
    if (!data) return newGame();
    setUpgrades(data.upgrades);
    setCoins(data.coin);
    setScene("game");

    const canvas = document.getElementById("gameCanvas");
    if (canvas) canvas.focus();
  };

  if (!loading) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
      <Button variant='empty' onClick={newGame}>
        <div className="relative w-72 select-none">
          <img
            src="/assets/Button.png"
            alt="Load Icon"
            className="w-full block pointer-events-none"
          />

          <span
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          >
            New Game
          </span>
        </div>
      </Button>

      <Button variant="empty" onClick={loadGameBtn}>
        <div className="relative w-72 select-none">
          <img
            src="/assets/Button.png"
            alt="Load Icon"
            className="w-full block pointer-events-none"
          />

          <span
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          >
            Load Game
          </span>
        </div>
      </Button>

    </div>
  );
};

export default MainMenu;
