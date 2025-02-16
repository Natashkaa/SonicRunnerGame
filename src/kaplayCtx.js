// import kaplay from "kaplay";
import kaplay from "https://unpkg.com/kaplay@3001/dist/kaplay.mjs";

const k = kaplay({
    width: 1920,
    height: 1080,
    letterbox: true,
    background: [0,0,0],
    global: false,
    touchToMouse: true,
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: "left",
        }
    },
    debugKey: "d",
    debug: true
});//initialize the canvas in wich the game will be displayed

export default k;