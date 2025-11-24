
import "kaplay/global";
import { bgSprite } from "../utils/sprites";
import {  isGameLoadedAtom, store } from "../utils/atoms";

export default function mainMenuScene() {

    onLoad(() => {
        store.set(isGameLoadedAtom, true);
    });

    add(bgSprite);
}