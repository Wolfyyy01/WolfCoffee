import kaplay from "kaplay";

const k =  kaplay(
  {
    width: 800,
    height: 600,
    letterbox: true,
    background: "#000000",
    global: true,
    touchToMouse: true,
    buttons: {
        click: {
            keyboard: ["enter", "space"],
            mouse: ["left"]
        }
    },
    debug: true,
    debugKey: "="
  }
)


export default k;