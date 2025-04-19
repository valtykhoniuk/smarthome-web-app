const selectedDrink = document.getElementById("drink-select");
const buttonMakeDrink = document.getElementById("make-drink");
const statusDrinkText = document.getElementById("status-drink-text");

buttonMakeDrink.addEventListener("click", () => {
  const drink = selectedDrink.value;
  statusDrinkText.textContent = `Status: Making ${drink}..`;
  setTimeout(() => {
    statusDrinkText.textContent = `Status: Your ${drink} is ready`;
  }, 4000);
});
