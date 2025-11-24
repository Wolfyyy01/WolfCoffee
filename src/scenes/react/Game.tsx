import { useAtom } from "jotai";
import { coinsAtom } from "../../utils/atoms";

const Game =() => {
  const [coins] = useAtom(coinsAtom);


  return (
    <div
      className="pointer-events-none absolute text-white text-4xl font-bold"
      style={{
        left: 90,
        top: 20,
      }}
    >
      {coins}
    </div>
  );
}

export default Game;