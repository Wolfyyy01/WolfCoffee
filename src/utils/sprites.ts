
import playerSprite from "../assets/player.png";
import bgSprite from "../assets/bg.jpg";
import shopSprite from "../assets/shop_basic.png";
import coffeeMachine1 from "../assets/coffee_machine_1.png";

loadSprite("player", playerSprite,)
loadSprite("bg", bgSprite,)
loadSprite("shop", shopSprite,)
loadSprite("coffeeMachine1", coffeeMachine1,)


const player = [
    sprite('player'),
    pos(170, -58),
    scale(0.5),
    layer("player")
]

const bg = [
    sprite('bg'),
    pos(0, -200),
    scale(0.8),
    layer("bg")
]

const shop = [
    sprite('shop'),
    pos(170, -50),
    scale(1),
    layer("shop")
]

const coffeeMachine = (machineTier) => {
    return [
        sprite(machineTier),
        pos(170, -60),
        scale(0.5),
        layer("shop")
    ]

}


export {
    player as playerSprite,
    bg as bgSprite,
    shop as shopSprite,
    coffeeMachine as coffeeMachineSprite
};