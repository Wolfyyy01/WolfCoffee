import { useAtom } from 'jotai'
import Button from '../mainMenu/Button'
import { coinsAtom, upgradeMenuVisibleAtom, upgradesAtom } from '../../utils/atoms'

type UpgradeType = keyof typeof initialUpgrades;

const initialUpgrades = {
    coffeeMachine: 1,
    shop: 1,
    player: 1,
};

const maxLevels: Partial<Record<UpgradeType, number>> = {
    player: 15,
};

const upgradeCosts: Record<UpgradeType, (level: number) => number> = {
    coffeeMachine: (level) => 2 * Math.pow(1.5, level - 1),
    shop: (level) => 2 * Math.pow(2, level - 1),
    player: (level) => 2 * Math.pow(1.8, level - 1),
};

const upgradeDescriptions: Record<UpgradeType, string> = {
    coffeeMachine: "Increases the base number of coins per interval.",
    shop: "Increases the coin multiplier.",
    player: "Increases the frequency of coin generation.",
}

const UpgradesMenu = () => {
    const [upgrades, setUpgrades] = useAtom(upgradesAtom)
    const [coins, setCoins] = useAtom(coinsAtom)
    const [, setUpgradeMenuVisible] = useAtom(upgradeMenuVisibleAtom)

    function updateCanvas() {
        const canvas = document.getElementById("gameCanvas");
        if (canvas) canvas.focus();
    }

    function upgrade(type: UpgradeType) {
        const maxLevel = maxLevels[type];
        if (maxLevel && upgrades[type] >= maxLevel) {
            return;
        }

        const cost = Math.ceil(upgradeCosts[type](upgrades[type]));

        if (coins >= cost) {
            setCoins(coins - cost);
            setUpgrades({
                ...upgrades,
                [type]: upgrades[type] + 1,
            });
        }
        updateCanvas()
    }

    return (
        <div className="upgrades-menu-container flex flex-col mx-auto my-auto justify-center items-center absolute inset-0 ">
            <div className='bg-stone-900 bg-opacity-80 p-8 rounded-lg text-white '>
                <h2 className="text-4xl font-bold mb-6 text-center">Upgrades</h2>
                <div className="flex flex-col gap-4">
                    {Object.keys(initialUpgrades).map((upgradeKey) => {
                        const type = upgradeKey as UpgradeType;
                        const level = upgrades[type];
                        const cost = Math.ceil(upgradeCosts[type](level));
                        const maxLevel = maxLevels[type];
                        const isMaxLevel = maxLevel && level >= maxLevel;

                        return (
                            <div key={type} className="flex items-center gap-4 p-4 bg-stone-800 rounded-md">
                                <div className='w-24 text-2xl font-bold text-yellow-400'>
                                    {isMaxLevel ? "MAX" : cost}
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-xl font-bold'>{type.charAt(0).toUpperCase() + type.slice(1)} (x{level})</h3>
                                    <p className='text-sm text-gray-400'>{upgradeDescriptions[type]}</p>
                                </div>
                                {isMaxLevel ? (
                                    <Button variant="secondary" disabled onClick={()=> updateCanvas()}>
                                        MAX
                                    </Button>
                                ) : (
                                    <Button variant="secondary" onClick={() => { upgrade(type) }} disabled={coins < cost}>
                                        Upgrade
                                    </Button>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center mt-8'>
                    <Button variant="primary" onClick={() => { setUpgradeMenuVisible(false); updateCanvas() }}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UpgradesMenu