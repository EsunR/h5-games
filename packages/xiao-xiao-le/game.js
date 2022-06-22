import "./libs/laya.core.js";
import "./libs/laya.wxmini.js";
import "./libs/laya.webgl.js";
import "./libs/laya.ani.js";
import "./libs/laya.filter.js";
import "./libs/laya.ui.js";

import Main from "./js/Main.js";
const canvas = document.getElementById("canvas");
if (canvas) {
    window.canvas = canvas;
    new Main();
} else {
    console.error("canvas is undefined");
}
