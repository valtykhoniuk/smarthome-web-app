function init() {
  import("index.intro.js");
}

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".room-device");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const id = option.id;

      if (id) {
        window.location.href = `${id}.html`;
      }
    });
  });
});
