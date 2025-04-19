"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lampSwitch = document.getElementById("lamp-switch");
const modeLampStatus = document.getElementById("mode-status");
const roomName = lampSwitch.dataset.room;
if (!roomName) {
    throw new Error("Room name is not defined on lamp switch!");
}
function loadLampState() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("http://localhost:3000/api/state");
            const data = yield res.json();
            const isOn = data.lights[roomName];
            lampSwitch.checked = isOn;
            modeLampStatus.textContent = isOn ? "On" : "Off";
        }
        catch (error) {
            console.error("Failed to load lamp state:", error);
        }
    });
}
lampSwitch.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    const isOn = lampSwitch.checked;
    modeLampStatus.textContent = isOn ? "On" : "Off";
    try {
        const res = yield fetch("http://localhost:3000/api/state");
        const state = yield res.json();
        state.lights[roomName] = isOn;
        yield fetch("http://localhost:3000/api/state", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        });
    }
    catch (error) {
        console.error("Failed to update lamp state:", error);
    }
}));
loadLampState();
