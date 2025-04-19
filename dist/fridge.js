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
const tempValue = document.getElementById("temp-value");
const increaseBtn = document.getElementById("increase-temp");
const decreaseBtn = document.getElementById("decrease-temp");
const fridgeSwitch = document.getElementById("fridge-switch");
const modeStatus = document.getElementById("mode-status");
let currentTemp = 5;
function loadFridgeState() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/state");
        const data = yield res.json();
        currentTemp = data.fridge.temperature || 5;
        tempValue.textContent = currentTemp.toString();
        const isFridgeOn = data.fridge.mode || false;
        fridgeSwitch.checked = isFridgeOn;
        modeStatus.textContent = isFridgeOn ? "On" : "Off";
    });
}
loadFridgeState();
increaseBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (currentTemp < 10) {
        currentTemp++;
        tempValue.textContent = currentTemp.toString();
        yield updateFridgeState();
    }
}));
decreaseBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (currentTemp > -5) {
        currentTemp--;
        tempValue.textContent = currentTemp.toString();
        yield updateFridgeState();
    }
}));
fridgeSwitch.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    modeStatus.textContent = fridgeSwitch.checked ? "On" : "Off";
    yield updateFridgeState();
}));
function updateFridgeState() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/state");
        const state = yield res.json();
        state.fridge.temperature = currentTemp;
        state.fridge.mode = fridgeSwitch.checked;
        yield fetch("http://localhost:3000/api/state", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state), // Відправляємо оновлений стан
        });
    });
}
