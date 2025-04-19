const intensivityValue = document.getElementById("intensivity-value");
const increaseBtnVC = document.getElementById("increase-ins-value");
const decreaseBtnVC = document.getElementById("decrease-ins-value");

let currentIntensivity = 30;

increaseBtnVC.addEventListener("click", () => {
  if (currentIntensivity < 50) {
    currentIntensivity++;
    intensivityValue.textContent = currentIntensivity;
  }
});

decreaseBtnVC.addEventListener("click", () => {
  if (currentIntensivity > 1) {
    currentIntensivity--;
    intensivityValue.textContent = currentIntensivity;
  }
});

const vcSwitch = document.getElementById("vc-switch");
const vcStatus = document.getElementById("mode-vc-status");

vcSwitch.addEventListener("change", () => {
  vcStatus.textContent = vcSwitch.checked ? "On" : "Off";
});
