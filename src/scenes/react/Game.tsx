import { useAtom } from "jotai";
import { coinsAtom, upgradeMenuVisibleAtom } from "../../utils/atoms";
import UpgradesMenu from "../../components/game/UpgradesMenu";

const Game = () => {
  const [coins] = useAtom(coinsAtom);
  const [UpgradesMenuVisible] = useAtom(upgradeMenuVisibleAtom);


  return (
    <>
      <div
        className="pointer-events-none absolute text-white text-4xl font-bold"
        style={{
          left: 90,
          top: 20,
        }}

      >
        {coins}
      </div>
      {UpgradesMenuVisible && <UpgradesMenu />}

    </>
  );
}

export default Game;