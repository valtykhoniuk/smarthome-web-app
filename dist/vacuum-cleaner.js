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
const intensivityValue = document.getElementById("intensivity-value");
const increaseBtnVC = document.getElementById("increase-ins-value");
const decreaseBtnVC = document.getElementById("decrease-ins-value");
const vcSwitch = document.getElementById("vc-switch");
const vcStatus = document.getElementById("mode-vc-status");
let currentIntensivity = 0;
function loadVCState() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/state");
        const data = yield res.json();
        currentIntensivity = data.vacuum.intensivity || 0;
        intensivityValue.textContent = currentIntensivity.toString();
        const isVacuumOn = data.vacuum.isOn || false;
        vcSwitch.checked = isVacuumOn;
        vcStatus.textContent = isVacuumOn ? "On" : "Off";
    });
}
loadVCState();
increaseBtnVC.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (currentIntensivity < 50) {
        currentIntensivity++;
        intensivityValue.textContent = currentIntensivity.toString();
        yield updateVacuumState();
    }
}));
decreaseBtnVC.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (currentIntensivity > 1) {
        currentIntensivity--;
        intensivityValue.textContent = currentIntensivity.toString();
        yield updateVacuumState();
    }
}));
vcSwitch.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    vcStatus.textContent = vcSwitch.checked ? "On" : "Off";
    yield updateVacuumState();
}));
function updateVacuumState() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/state");
        const state = yield res.json();
        state.vacuum.intensivity = currentIntensivity;
        state.vacuum.isOn = vcSwitch.checked;
        yield fetch("http://localhost:3000/api/state", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        });
    });
}
