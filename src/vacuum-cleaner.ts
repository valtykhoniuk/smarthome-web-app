const intensivityValue = document.getElementById(
  "intensivity-value"
) as HTMLElement;
const increaseBtnVC = document.getElementById(
  "increase-ins-value"
) as HTMLButtonElement;
const decreaseBtnVC = document.getElementById(
  "decrease-ins-value"
) as HTMLButtonElement;

let currentIntensivity: number = 30;

increaseBtnVC.addEventListener("click", (): void => {
  if (currentIntensivity < 50) {
    currentIntensivity++;
    intensivityValue.textContent = currentIntensivity.toString();
  }
});

decreaseBtnVC.addEventListener("click", (): void => {
  if (currentIntensivity > 1) {
    currentIntensivity--;
    intensivityValue.textContent = currentIntensivity.toString();
  }
});

const vcSwitch = document.getElementById("vc-switch") as HTMLInputElement;
const vcStatus = document.getElementById("mode-vc-status") as HTMLElement;

vcSwitch.addEventListener("change", (): void => {
  vcStatus.textContent = vcSwitch.checked ? "On" : "Off";
});
