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
   MOBILE NAV TOGGLE
===================== */
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
  toggleBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggleBtn.addEventListener("click", () => {
  const isOpen = nav.classList.contains("is-open");
  setMenu(!isOpen);
});

// Close menu when clicking a link (mobile)
nav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  setMenu(false);
});

// Close on Escape (accessibility)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// If resizing to desktop, ensure nav is reset
window.addEventListener("resize", () => {
  if (window.innerWidth > 680) setMenu(false);
});
