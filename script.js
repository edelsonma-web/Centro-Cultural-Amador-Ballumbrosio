/* MENU RESPONSIVE */
const menu = document.querySelector(".menu");
const header = document.querySelector("header");

const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";
header.appendChild(burger);

burger.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});

/* SCROLL SUAVE */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        menu.classList.remove("menu-open");
    });
});

/* ANIMACIONES */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* MODAL GALERIA */
const modal = document.getElementById("modal-galeria");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".galeria-item").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = item.src;
    });
});

closeModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

/* BOTÓN WHATSAPP */
const wspBtn = document.createElement("a");
wspBtn.href = "https://wa.me/51997575306";
wspBtn.classList.add("wsp-floating");
wspBtn.innerHTML = "💬";
wspBtn.target = "_blank";
document.body.appendChild(wspBtn);
