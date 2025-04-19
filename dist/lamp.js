"use strict";
const lampSwitch = document.getElementById("lamp-switch");
const modeLampStatus = document.getElementById("mode-status");
lampSwitch.addEventListener("change", () => {
    modeLampStatus.textContent = lampSwitch.checked ? "On" : "Off";
});
