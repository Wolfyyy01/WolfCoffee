loadSound("coinSound", "./assets/sounds/coin.wav");

const coinSoundPlay = () => {
    play("coinSound", { volume: 0.5 });
}

export { coinSoundPlay };