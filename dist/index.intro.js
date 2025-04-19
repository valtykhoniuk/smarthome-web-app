"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".room-list__item");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            const id = option.id;
            const specialRooms = ["bedroom", "kitchen", "living-room"];
            if (specialRooms.includes(id)) {
                window.location.href = `public/${id}.html`;
            }
            else {
                const lights = ["lamp-bedroom", "lamp-kitchen", "lamp-living-room"];
                if (lights.includes(id)) {
                    window.location.href = `lamps/${id}.html`;
                }
                else {
                    window.location.href = `${id}.html`;
                }
            }
        });
    });
});
