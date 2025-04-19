const lampSwitch = document.getElementById("lamp-switch") as HTMLInputElement;
const modeLampStatus = document.getElementById("mode-status") as HTMLElement;

lampSwitch.addEventListener("change", (): void => {
  modeLampStatus.textContent = lampSwitch.checked ? "On" : "Off";
});
