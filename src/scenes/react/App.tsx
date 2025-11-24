import { useAtom } from 'jotai';
import { currentSceneAtom } from '../../utils/atoms';
import MainMenu from './MainMenu';
import Game from './game';

const App = () => {
    const [scene] = useAtom(currentSceneAtom);

    if (scene === "mainMenu") {
        return (
            <MainMenu />
        )
    } else if (scene === "game") {
        return (
            <Game />
        )
    }
}

export default App