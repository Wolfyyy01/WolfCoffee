import { useAtom } from 'jotai'
import Button from '../mainMenu/Button'
import { upgradesAtom } from '../../utils/atoms'

const UpgradesMenu = ({ coins, setCoins }: { coins: number, setCoins: any }) => {
    const [upgrades, setUpgrades] = useAtom(upgradesAtom)

    function upgrade(type: keyof typeof upgrades) {

        const cost = 10

        if (coins >= cost) {
            setCoins(coins - cost);
            setUpgrades({
                ...upgrades,
                [type]: upgrades[type] + 1,
            });
        }

        const canvas = document.getElementById("gameCanvas");
        if (canvas) canvas.focus();
    }


    return (
        <div className="flex mx-auto my-auto justify-center items-center absolute inset-0 bg-black bg-opacity-0 w-100 h-100">
            <Button variant="secondary" onClick={() => { upgrade('coffeeMachine') }}>
                Coffee Machine
            </Button>
        </div>
    )
}

export default UpgradesMenu