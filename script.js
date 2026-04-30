/* =====================
   ANNUAL PROGRAMME 2026 DATA
===================== */
const PROGRAMME_2026 = [
  {
    title: "MEZZOTINT; refleksjoner",
    artist: "Erling Valtyrson",
    medium: { en: "Mezzotint", no: "Mezzotint" },
    dates: {
      en: "30 May – 5 July 2026",
      no: "30. mai – 5. juli 2026"
    },
    type: "solo"
  },
  {
    title: "Tilhørighet",
    artists: [
      { name: "Gry Sveen", medium: { en: "Charcoal / Soft pastel", no: "Kull / Tørrpastell" } },
      { name: "Øyvind Sund", medium: { en: "Woodcut", no: "Tresnitt" } }
    ],
    dates: {
      en: "29 July – 16 August 2026",
      no: "29. juli – 16. august 2026"
    },
    type: "duo"
  },
  {
    title: "Residence 2026",
    subtitle: {
      en: "Annual group exhibition with artists in residence at SAR",
      no: "Årlig gruppeutstilling med kunstnere i opphold hos SAR"
    },
    artistsList: [
      "Anne Siv Falkenberg Pedersen (NO)",
      "Erik Wøllo (NO)",
      "Elisabeth Østensvik (NO)",
      "Sveinung Nygaard (NO)",
      "Kjetil Teigen (NO)",
      "Ann Kristin Aas (NO)",
      "Lilla von Puttkamer (DE)",
      "Albrecht Fersch (DE)",
      "Jannecke Lønne Christensen (NO)",
      "Morten Løberg (NO)"
    ],
    dates: {
      en: "12 – 27 September 2026",
      no: "12. – 27. september 2026"
    },
    type: "group"
  },
  {
    title: "Landskap i forandring",
    artist: "Patrick Huse",
    medium: { en: "Drawing / Woodcut", no: "Tegning / Tresnitt" },
    dates: {
      en: "14 November – 6 December 2026",
      no: "14. november – 6. desember 2026"
    },
    type: "solo"
  }
];

/* =====================
   I18N TRANSLATIONS
===================== */
const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.program": "Program",
    "nav.visuals": "Visuals",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.contact": "Contact",

    "hero.title": "CRAFT<span class=\"hero-semicolon\">;</span> Gallery for Contemporary Art",
    "hero.subtitle": "Vinstra, Norway · Established 2026",

    "current.label": "Upcoming Exhibition",
    "current.title": "MEZZOTINT<span class=\"hero-semicolon\">;</span> refleksjoner",
    "current.artist": "Erling Valtyrson",
    "current.dates": "30 May – 5 July 2026",
    "current.caption": "Erling Valtyrson · <em>Kjellerbilde</em> · Mezzotint · 21,5 × 24,5 cm",
    "current.body": "The opening exhibition at CRAFT presents Erling Valtyrson's intricate mezzotints — a printmaking technique known for its deep tonal range and meticulous, hand-burnished surfaces. The works invite quiet, sustained looking; still lifes and interiors composed from objects that hover between the everyday and the symbolic.",

    "programme.label": "Annual Programme 2026",

    "footer.contact": "Contact",
    "footer.email": "E-mail",
    "footer.tel": "Tel",
    "footer.address": "Visiting address",
    "footer.staff": "Staff",
    "footer.role.intendant": "Owner and Intendant",
    "footer.role.admin": "Administrative partner",
    "footer.role.coop": "Gallery cooperative & technical assistance",
    "footer.partners": "Partners",
    "footer.partner.municipality": "Nord-Fron Municipality",
    "footer.partner.county": "Innlandet County Municipality",

    /* Subpages */
    "page.program.title": "Program",
    "page.program.intro": "Annual programme for 2026. Three to five exhibitions per year, accompanied by lectures, performances, screenings, book presentations and artist conversations.",

    "page.about.title": "About",
    "page.about.body": "<p>CRAFT; Gallery for Contemporary Art was established in spring 2026 in the small inland town of Vinstra, Norway, located 100 km north of Lillehammer. It is the first professionally run, full-time gallery in the municipality.</p><p>After 55 years as a working visual artist, Patrick Huse founded PHT; Studio Gallery from 2021 to 2025, in connection with the Patrick Huse Studio and Skåbu Artist Residence. PHT; Studio Gallery developed further and was rebuilt in 2026 to become CRAFT; Gallery for Contemporary Art.</p><p>The gallery was established as part of, and in collaboration with, SAR; Skåbu Artist Residence. Together with the residency, the gallery presents an annual group exhibition featuring the artists in residence during the exhibition year.</p>",

    "page.team.title": "Team",
    "page.team.intendant.role": "Owner and Intendant",
    "page.team.intendant.bio": "Patrick Huse is a Norwegian visual artist with more than 55 years of professional practice. He founded PHT; Studio Gallery in 2021 and established CRAFT; Gallery for Contemporary Art in 2026.",
    "page.team.admin.role": "Administrative Partner",
    "page.team.admin.bio": "Solveig M. Huse leads the gallery's administration and works closely with Patrick Huse on programme planning and partnerships.",
    "page.team.coop.role": "Gallery Cooperative & Technical Assistance",
    "page.team.coop.bio": "Nina Standerholen contributes to the gallery's daily operations and supports the technical realisation of exhibitions.",

    "page.visuals.title": "Visuals",
    "page.visuals.intro": "Documentation, installation views and selected works from current and past exhibitions."
  },

  no: {
    "nav.home": "Hjem",
    "nav.program": "Program",
    "nav.visuals": "Bilder",
    "nav.about": "Om",
    "nav.team": "Medarbeidere",
    "nav.contact": "Kontakt",

    "hero.title": "CRAFT<span class=\"hero-semicolon\">;</span> Galleri for samtidskunst",
    "hero.subtitle": "Vinstra, Norge · Etablert 2026",

    "current.label": "Kommende utstilling",
    "current.title": "MEZZOTINT<span class=\"hero-semicolon\">;</span> refleksjoner",
    "current.artist": "Erling Valtyrson",
    "current.dates": "30. mai – 5. juli 2026",
    "current.caption": "Erling Valtyrson · <em>Kjellerbilde</em> · Mezzotint · 21,5 × 24,5 cm",
    "current.body": "Åpningsutstillingen på CRAFT presenterer Erling Valtyrsons forfinede mezzotinter — en grafisk teknikk kjent for sitt dype tonale register og sine omhyggelig håndarbeidede flater. Verkene innbyr til langsom og vedvarende betraktning; stilleben og interiører satt sammen av gjenstander som beveger seg mellom det dagligdagse og det symbolske.",

    "programme.label": "Årsprogram 2026",

    "footer.contact": "Kontakt",
    "footer.email": "E-post",
    "footer.tel": "Tlf",
    "footer.address": "Besøksadresse",
    "footer.staff": "Medarbeidere",
    "footer.role.intendant": "Eier og intendant",
    "footer.role.admin": "Administrativ partner",
    "footer.role.coop": "Galleridrift & teknisk assistanse",
    "footer.partners": "Samarbeidspartnere",
    "footer.partner.municipality": "Nord-Fron kommune",
    "footer.partner.county": "Innlandet fylkeskommune",

    /* Subpages */
    "page.program.title": "Program",
    "page.program.intro": "Årsprogram for 2026. Tre til fem utstillinger per år, ledsaget av forelesninger, framføringer, visninger, bokpresentasjoner og kunstnersamtaler.",

    "page.about.title": "Om",
    "page.about.body": "<p>CRAFT; galleri for samtidskunst ble etablert våren 2026 i den lille innlandsbyen Vinstra i Norge, 100 km nord for Lillehammer. Galleriet er det første profesjonelt fulltids drevne galleriet i kommunen.</p><p>Etter 55 år som yrkesaktiv billedkunstner startet Patrick Huse fra 2021 til 2025 PHT; Studio galleri i tilknytning til Patrick Huses studio og Skåbu Artist Residence. PHT; Studio galleri utviklet seg videre og ble bygget om i 2026 til CRAFT; galleri for samtidskunst.</p><p>Galleriet ble etablert som en del av og i samarbeid med SAR; Skåbu Artist Residence. Residensen vil i samarbeid med galleriet vise en fast årlig gruppeutstilling med kunstnerne som har arbeidsopphold i utstillingsåret.</p>",

    "page.team.title": "Medarbeidere",
    "page.team.intendant.role": "Eier og intendant",
    "page.team.intendant.bio": "Patrick Huse er norsk billedkunstner med over 55 år bak seg som yrkesaktiv. Han grunnla PHT; Studio galleri i 2021 og etablerte CRAFT; galleri for samtidskunst i 2026.",
    "page.team.admin.role": "Administrativ partner",
    "page.team.admin.bio": "Solveig M. Huse leder galleriets administrasjon og arbeider tett med Patrick Huse om programplanlegging og samarbeid.",
    "page.team.coop.role": "Galleridrift og teknisk assistanse",
    "page.team.coop.bio": "Nina Standerholen bidrar i galleriets daglige drift og støtter den tekniske gjennomføringen av utstillinger.",

    "page.visuals.title": "Bilder",
    "page.visuals.intro": "Dokumentasjon, installasjonsbilder og utvalgte verk fra nåværende og tidligere utstillinger."
  }
};

/* =====================
   I18N ENGINE
===================== */
function getStoredLang() {
  try {
    return localStorage.getItem("craft_lang") || "en";
  } catch (_) {
    return "en";
  }
}

function setStoredLang(lang) {
  try { localStorage.setItem("craft_lang", lang); } catch (_) {}
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.documentElement.lang = lang === "no" ? "no" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Re-render programme grid if present
  if (document.getElementById("programme-grid")) {
    renderProgramme(lang);
  }
}

function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setStoredLang(lang);
      applyTranslations(lang);
    });
  });
}

/* =====================
   PROGRAMME RENDERING
===================== */
function renderProgramme(lang) {
  const grid = document.getElementById("programme-grid");
  if (!grid) return;
  grid.innerHTML = "";

  PROGRAMME_2026.forEach((exh) => {
    const card = document.createElement("article");
    card.className = "exh-card";

    let html = `<div class="exh-card-dates">${exh.dates[lang]}</div>`;
    html += `<h3 class="exh-card-title">${exh.title}</h3>`;

    if (exh.type === "solo") {
      html += `<div class="exh-card-artist">${exh.artist}</div>`;
      html += `<div class="exh-card-medium">${exh.medium[lang]}</div>`;
    } else if (exh.type === "duo") {
      exh.artists.forEach((a) => {
        html += `<div class="exh-card-artist">${a.name}</div>`;
        html += `<div class="exh-card-medium">${a.medium[lang]}</div>`;
      });
    } else if (exh.type === "group") {
      if (exh.subtitle) {
        html += `<div class="exh-card-medium">${exh.subtitle[lang]}</div>`;
      }
      const list = exh.artistsList.map((n) => `<div>${n}</div>`).join("");
      html += `<div class="exh-card-artists-list">${list}</div>`;
    }

    card.innerHTML = html;
    grid.appendChild(card);
  });
}

/* =====================
   MOBILE NAV (FAB DROPDOWN)
===================== */
function initMobileNav() {
  const fab = document.querySelector(".fab");
  const nav = document.querySelector(".nav");
  if (!fab || !nav) return;

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

  fab.addEventListener("click", () => setMenu(!isOpen));

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
}

/* =====================
   INIT
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const lang = getStoredLang();
  applyTranslations(lang);
  initLangSwitch();
  initMobileNav();
});
