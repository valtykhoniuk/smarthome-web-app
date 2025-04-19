const selectedChannel = document.getElementById(
  "channel-select"
) as HTMLSelectElement;
const buttonSelectChannel = document.getElementById(
  "choose-channel"
) as HTMLButtonElement;
const statusChannelText = document.getElementById(
  "status-tv-text"
) as HTMLElement;

async function loadTVState() {
  const res = await fetch("http://localhost:3000/api/state");
  const data = await res.json();
  const channel = data.tv?.channel || "-";
  statusChannelText.textContent = `Current channel: ${channel}`;
  selectedChannel.value = channel;
}
loadTVState();

async function updateChannel(channel: string) {
  const res = await fetch("http://localhost:3000/api/state");
  const state = await res.json();
  state.tv.channel = channel;

  await fetch("http://localhost:3000/api/state", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });

  statusChannelText.textContent = `Current channel: ${channel}`;
}

buttonSelectChannel.addEventListener("click", () => {
  updateChannel(selectedChannel.value);
});
