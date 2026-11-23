
document.addEventListener("DOMContentLoaded", () => {

    const trigger = document.getElementById("profileTrigger");
    const dropdown = document.getElementById("profileDropdown");

    if (!trigger || !dropdown) return;

    function openDropdown() {
        dropdown.inert = false;
        dropdown.classList.add("show");
        trigger.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
    }

    function closeDropdown() {
        dropdown.classList.remove("show");
        trigger.classList.remove("active");
        trigger.setAttribute("aria-expanded", "false");

        dropdown.inert = true;
    }

    trigger.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    // Klik di luar dropdown
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".profile-container")) {
            closeDropdown();
        }
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDropdown();
            trigger.focus();
        }
    });

});
