const tempValue = document.getElementById("temp-value") as HTMLElement;
const increaseBtn = document.getElementById(
  "increase-temp"
) as HTMLSelectElement;
const decreaseBtn = document.getElementById(
  "decrease-temp"
) as HTMLSelectElement;
const fridgeSwitch = document.getElementById(
  "fridge-switch"
) as HTMLInputElement;

const modeStatus = document.getElementById("mode-status") as HTMLElement;

let currentTemp: number = 5;

async function loadFridgeState() {
  const res = await fetch("http://localhost:3000/api/state");
  const data = await res.json();

  currentTemp = data.fridge.temperature || 5;
  tempValue.textContent = currentTemp.toString();

  const isFridgeOn = data.fridge.mode || false;
  fridgeSwitch.checked = isFridgeOn;
  modeStatus.textContent = isFridgeOn ? "On" : "Off";
}

loadFridgeState();

increaseBtn.addEventListener("click", async (): Promise<void> => {
  if (currentTemp < 10) {
    currentTemp++;
    tempValue.textContent = currentTemp.toString();
    await updateFridgeState();
  }
});

decreaseBtn.addEventListener("click", async (): Promise<void> => {
  if (currentTemp > -5) {
    currentTemp--;
    tempValue.textContent = currentTemp.toString();
    await updateFridgeState();
  }
});

fridgeSwitch.addEventListener("change", async (): Promise<void> => {
  modeStatus.textContent = fridgeSwitch.checked ? "On" : "Off";
  await updateFridgeState();
});

async function updateFridgeState() {
  const res = await fetch("http://localhost:3000/api/state");
  const state = await res.json();

  state.fridge.temperature = currentTemp;
  state.fridge.mode = fridgeSwitch.checked;

  await fetch("http://localhost:3000/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state), // Відправляємо оновлений стан
  });
}
