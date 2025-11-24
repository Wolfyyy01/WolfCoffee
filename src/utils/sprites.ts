loadSprite("player", "./assets/player.png",)
loadSprite("bg", "./assets/bg.jpg",)
loadSprite("shop", "./assets/shop_basic.png",)
loadSprite("coin", "./assets/coin.png",)
loadSprite("coffeeMachine1", "./assets/coffee_machine_1.png",)


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

const coin = [
    sprite('coin'),
    anchor("center"),
    pos(40, 40),
    scale(0.3),
    layer("coins"),
]

const coffeeMachine = (machineTier: string) => {
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
    coin as coinSprite,
    coffeeMachine as coffeeMachineSprite
};