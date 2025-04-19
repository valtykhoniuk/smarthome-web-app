const lampSwitch = document.getElementById("lamp-switch");
const modeStatus = document.getElementById("mode-status");

lampSwitch.addEventListener("change", () => {
  modeStatus.textContent = lampSwitch.checked ? "On" : "Off";
});
