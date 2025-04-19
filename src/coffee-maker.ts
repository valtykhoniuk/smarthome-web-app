const selectedDrink = document.getElementById(
  "drink-select"
) as HTMLSelectElement;
const buttonMakeDrink = document.getElementById(
  "make-drink"
) as HTMLSelectElement;
const statusDrinkText = document.getElementById(
  "status-drink-text"
) as HTMLElement;

buttonMakeDrink.addEventListener("click", (): void => {
  const drink: string = selectedDrink.value;
  statusDrinkText.textContent = `Status: Making ${drink}..`;
  setTimeout((): void => {
    statusDrinkText.textContent = `Status: Your ${drink} is ready`;
  }, 4000);
});
