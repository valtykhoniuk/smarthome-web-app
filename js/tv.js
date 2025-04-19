const selectedChannel = document.getElementById("channel-select");
const buttonSelectChannel = document.getElementById("choose-channel");
const statusChannelText = document.getElementById("status-tv-text");

buttonSelectChannel.addEventListener("click", () => {
  const channel = selectedChannel.value;
  statusChannelText.textContent = `Current channel: ${channel}`;
});
