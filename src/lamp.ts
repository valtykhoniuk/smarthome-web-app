const lampSwitch = document.getElementById("lamp-switch") as HTMLInputElement;
const modeLampStatus = document.getElementById("mode-status") as HTMLElement;
const roomName = lampSwitch.dataset.room;

if (!roomName) {
  throw new Error("Room name is not defined on lamp switch!");
}

async function loadLampState(): Promise<void> {
  try {
    const res = await fetch("http://localhost:3000/api/state");
    const data = await res.json();

    const isOn = data.lights[roomName as keyof typeof data.lights];
    lampSwitch.checked = isOn;
    modeLampStatus.textContent = isOn ? "On" : "Off";
  } catch (error) {
    console.error("Failed to load lamp state:", error);
  }
}

lampSwitch.addEventListener("change", async (): Promise<void> => {
  const isOn = lampSwitch.checked;
  modeLampStatus.textContent = isOn ? "On" : "Off";

  try {
    const res = await fetch("http://localhost:3000/api/state");
    const state = await res.json();

    state.lights[roomName] = isOn;

    await fetch("http://localhost:3000/api/state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
  } catch (error) {
    console.error("Failed to update lamp state:", error);
  }
});

loadLampState();
