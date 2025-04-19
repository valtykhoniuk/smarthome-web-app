const selectedChannel = document.getElementById(
  "channel-select"
) as HTMLSelectElement;
const buttonSelectChannel = document.getElementById(
  "choose-channel"
) as HTMLButtonElement;
const statusChannelText = document.getElementById(
  "status-tv-text"
) as HTMLElement;

buttonSelectChannel.addEventListener("click", (): void => {
  const channel = selectedChannel.value;
  statusChannelText.textContent = `Current channel: ${channel}`;
});
