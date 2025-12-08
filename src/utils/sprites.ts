loadSprite("player1", "./assets/player_1.png",)
loadSprite("player2", "./assets/player_2.png",)
loadSprite("player3", "./assets/player_3.png",)
loadSprite("bg", "./assets/bg.jpg",)
loadSprite("shop1", "./assets/shop_basic.png",)
loadSprite("shop2", "./assets/shop_2.png",)
loadSprite("shop3", "./assets/shop_3.png",)
loadSprite("coin", "./assets/coin.png",)
loadSprite("coffeeMachine1", "./assets/coffee_machine_1.png",)
loadSprite("coffeeMachine2", "./assets/coffee_machine_2.png",)
loadSprite("coffeeMachine3", "./assets/coffee_machine_3.png",)
loadSprite("coffeeMachine4", "./assets/coffee_machine_4.png",)
loadSprite("coffeeMachine5", "./assets/coffee_machine_5.png",)




const bg = [
    sprite('bg'),
    pos(0, -200),
    scale(0.8),
    layer("bg")
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
        layer("coffeeMachine")
    ]

}

const player = (tier: string) => {
    return [
        sprite(tier),
        pos(170, -47),
        scale(1),
        layer("player")
    ]
}

const shop = (tier: string) => {
    return [
        sprite(tier),
        pos(170, -50),
        scale(1),
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