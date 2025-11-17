import coinSound from "../assets/sounds/coin.wav";

loadSound("coinSound", coinSound);

const coinSoundPlay = () => {
    play("coinSound", { volume: 0.5 });
}

export { coinSoundPlay };