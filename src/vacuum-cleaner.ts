const intensivityValue = document.getElementById(
  "intensivity-value"
) as HTMLElement;
const increaseBtnVC = document.getElementById(
  "increase-ins-value"
) as HTMLButtonElement;
const decreaseBtnVC = document.getElementById(
  "decrease-ins-value"
) as HTMLButtonElement;
const vcSwitch = document.getElementById("vc-switch") as HTMLInputElement;
const vcStatus = document.getElementById("mode-vc-status") as HTMLElement;

let currentIntensivity: number = 0;

async function loadVCState() {
  const res = await fetch("http://localhost:3000/api/state");
  const data = await res.json();
  currentIntensivity = data.vacuum.intensivity || 0;
  intensivityValue.textContent = currentIntensivity.toString();

  const isVacuumOn = data.vacuum.isOn || false;
  vcSwitch.checked = isVacuumOn;
  vcStatus.textContent = isVacuumOn ? "On" : "Off";
}

loadVCState();

increaseBtnVC.addEventListener("click", async (): Promise<void> => {
  if (currentIntensivity < 50) {
    currentIntensivity++;
    intensivityValue.textContent = currentIntensivity.toString();
    await updateVacuumState();
  }
});

decreaseBtnVC.addEventListener("click", async (): Promise<void> => {
  if (currentIntensivity > 1) {
    currentIntensivity--;
    intensivityValue.textContent = currentIntensivity.toString();
    await updateVacuumState();
  }
});

vcSwitch.addEventListener("change", async (): Promise<void> => {
  vcStatus.textContent = vcSwitch.checked ? "On" : "Off";
  await updateVacuumState();
});

async function updateVacuumState() {
  const res = await fetch("http://localhost:3000/api/state");
  const state = await res.json();
  state.vacuum.intensivity = currentIntensivity;
  state.vacuum.isOn = vcSwitch.checked;

  await fetch("http://localhost:3000/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });
}
