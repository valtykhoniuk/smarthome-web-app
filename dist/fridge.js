"use strict";
const tempValue = document.getElementById("temp-value");
const increaseBtn = document.getElementById("increase-temp");
const decreaseBtn = document.getElementById("decrease-temp");
let currentTemp = 5;
increaseBtn.addEventListener("click", () => {
    if (currentTemp < 10) {
        currentTemp++;
        tempValue.textContent = currentTemp.toString();
    }
});
decreaseBtn.addEventListener("click", () => {
    if (currentTemp > -5) {
        currentTemp--;
        tempValue.textContent = currentTemp.toString();
    }
});
const fridgeSwitch = document.getElementById("fridge-switch");
const modeStatus = document.getElementById("mode-status");
fridgeSwitch.addEventListener("change", () => {
    modeStatus.textContent = fridgeSwitch.checked ? "On" : "Off";
});
