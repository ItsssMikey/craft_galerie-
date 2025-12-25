/* =====================
   DATA-DRIVEN GALLERY
===================== */
const GALLERY_ITEMS = [
  { title: "Structural Study I", year: "2025" },
  { title: "Programmatic Grid", year: "2024" },
  { title: "Material Experiment", year: "2024" },
  { title: "Spatial Sequence", year: "2023" },
  { title: "Urban Fragment", year: "2023" },
  { title: "Concept Model", year: "2022" },
];

const galleryEl = document.querySelector(".gallery");

function renderGallery(items) {
  galleryEl.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image"></div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">${item.year}</div>
      </div>
    `;
    galleryEl.appendChild(card);
  });
}

renderGallery(GALLERY_ITEMS);

/* =====================
   MOBILE NAV (FAB DROPDOWN)
===================== */
const fab = document.querySelector(".fab");
const nav = document.querySelector(".nav");

let isOpen = false;

function setMenu(open) {
  isOpen = open;

  fab.classList.toggle("is-open", open);
  fab.setAttribute("aria-expanded", String(open));
  fab.setAttribute("aria-label", open ? "Close menu" : "Open menu");

  nav.classList.remove(open ? "collapse" : "transition");
  nav.classList.add(open ? "transition" : "collapse");

  nav.classList.toggle("is-expanded", open);
  nav.classList.toggle("is-collapsed", !open);
  nav.classList.toggle("is-open", open);
}

fab.addEventListener("click", () => {
  setMenu(!isOpen);
});

nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  if (window.innerWidth <= 680) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) setMenu(false);
});
