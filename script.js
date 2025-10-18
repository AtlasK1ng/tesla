document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("revealBtn");
    const acertijo = document.getElementById("acertijo");

    btn.addEventListener("click", () => {
        btn.style.display = "none"; // Oculta el botón
        acertijo.classList.remove("hidden"); // Muestra el texto
        acertijo.style.opacity = "0";
        acertijo.style.transform = "translateY(20px)";

        setTimeout(() => {
            acertijo.style.transition = "opacity 1s ease, transform 1s ease";
            acertijo.style.opacity = "1";
            acertijo.style.transform = "translateY(0)";
        }, 100);
    });
});