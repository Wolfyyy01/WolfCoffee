
import "kaplay/global";
import { bgSprite } from "../utils/sprites";
import { loadGame } from "../utils/functiions";

export default function mainMenuScene() {

    add(bgSprite);

    const btn = add([
        pos(center()),
        anchor("center"),
        rect(520, 75), // dreptunghiul butonului
        color(135, 42, 78),
        area(),
        outline(4, rgb(255, 255, 255)),
    ])


    const startBtn = add([
        text("New Game (SPACE)", { font: "Consolas", size: 100 }),
        pos(btn.pos),
        scale(0.5),
        anchor("center"),
        area(),
        outline(4),
    ]);

    const loadGameBtn = add([
        text("Load Game (L)", { font: "Consolas", size: 100 }),
        pos(btn.pos.x, btn.pos.y + 100),
        scale(0.5),
        anchor("center"),
        area(),
        outline(4),
    ]);


    btn.onHover(() => {
        btn.color = rgb(112, 35, 65)
        setCursor("pointer")
    })

    btn.onHoverEnd(() => {
		btn.color = rgb(135, 42, 78)
		setCursor("default")
	})

    startBtn.onClick(() => {
        go("game", { data : { coin: 0,upgrades: {coffeeMachine:1}} });
    });

    loadGameBtn.onClick(async() => {
        const data = await loadGame()
        go("game", { data });
    });

    onKeyPress("space", () => {
        go("game", { data : { coin: 0, upgrades: {coffeeMachine:1} } });
    });

    onKeyPress("l", async() => {
        const data = await loadGame()
        go("game", { data });
    });
}