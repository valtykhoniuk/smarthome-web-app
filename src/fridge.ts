const tempValue = document.getElementById("temp-value") as HTMLElement;
const increaseBtn = document.getElementById(
  "increase-temp"
) as HTMLSelectElement;
const decreaseBtn = document.getElementById(
  "decrease-temp"
) as HTMLSelectElement;

let currentTemp: number = 5;
increaseBtn.addEventListener("click", (): void => {
  if (currentTemp < 10) {
    currentTemp++;
    tempValue.textContent = currentTemp.toString();
  }
});

decreaseBtn.addEventListener("click", (): void => {
  if (currentTemp > -5) {
    currentTemp--;
    tempValue.textContent = currentTemp.toString();
  }
});

const fridgeSwitch = document.getElementById(
  "fridge-switch"
) as HTMLInputElement;

const modeStatus = document.getElementById("mode-status") as HTMLElement;
fridgeSwitch.addEventListener("change", (): void => {
  modeStatus.textContent = fridgeSwitch.checked ? "On" : "Off";
});
