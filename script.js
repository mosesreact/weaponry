function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-show");
}

// Close the menu when clicking outside of it
window.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    if (!event.target.closest(".hamburger") && !event.target.closest("#menu")) {
        menu.classList.remove("menu-show");
    }
});
