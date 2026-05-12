const API_URL = "http://localhost:3000/rackets";

// ── STATE ──────────────────────────────────────────────────
let allRackets = [];
let cartCount = 0;
let activeFilter = "all";

// ── DOM REFERENCES ─────────────────────────────────────────
const racketGrid    = document.getElementById("racketGrid");
const loadingState  = document.getElementById("loadingState");
const errorState    = document.getElementById("errorState");
const countDisplay  = document.getElementById("countDisplay");
const filterButtons = document.querySelectorAll(".filterBtn");
const cartBadge     = document.querySelector(".cartBadge");

// ── FETCH DATA ─────────────────────────────────────────────
const fetchRackets = async () => {
try {
    const response = await fetch(API_URL);

    if (!response.ok) {
    throw new Error(`HTTP error — status: ${response.status}`);
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error("Failed to fetch rackets:", error);
    return null;
}
};

// ── GET CATEGORY BADGE CLASS ────────────────────────────────
const getCategoryBadgeClass = (category) => {
const classMap = {
    Power:    "badgePower",
    Control:  "badgeControl",
    Beginner: "badgeBeginner",
};
return classMap[category] || "badgePower";
};

// ── RENDER STARS ────────────────────────────────────────────
const renderStars = (rating) => {
const fullStars = Math.floor(rating);
const hasHalf   = rating % 1 >= 0.5;
let starsHtml   = "";

for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="bi bi-star-fill"></i>';
}
if (hasHalf) {
    starsHtml += '<i class="bi bi-star-half"></i>';
}

return starsHtml;
};

// ── RENDER CARD ─────────────────────────────────────────────
const renderRacketCard = (racket, index) => {
const stockClass    = racket.inStock ? "badgeInStock" : "badgeOutOfStock";
const stockLabel    = racket.inStock ? "In Stock" : "Sold Out";
const categoryClass = getCategoryBadgeClass(racket.category);
const stars         = renderStars(racket.rating);
  const delay         = index * 60;

return `
    <div class="col-12 col-sm-6 col-lg-4" data-category="${racket.category}">
    <div class="card racketCard border-0 h-100" style="animation-delay: ${delay}ms">

        <div class="cardImageWrap">
        <img
            src="${racket.image}"
            alt="${racket.name}"
            loading="lazy"
            onerror="this.src='https://placehold.co/600x400/152017/4caf50?text=ACE+COURT'"
        />
        <span class="cardBadgeCategory ${categoryClass}">${racket.category}</span>
        <span class="cardBadgeStock ${stockClass}">${stockLabel}</span>
        </div>

        <div class="card-body d-flex flex-column">
        <p class="cardBrand">${racket.brand}</p>
        <h2 class="cardName">${racket.name}</h2>
        <p class="cardWeight">
            <i class="bi bi-speedometer2"></i> ${racket.weight}
        </p>
        <p class="cardDescription">${racket.description}</p>

        <div class="cardFooter mt-auto">
            <div>
            <p class="cardPrice">$${racket.price.toFixed(2)}</p>
            <div class="cardRating">
                ${stars}
                <span class="cardRatingNumber">${racket.rating}</span>
            </div>
            </div>
            <button
            class="cardAddBtn"
            ${!racket.inStock ? "disabled" : ""}
            onclick="handleAddToCart(${racket.id}, '${racket.name}')"
            >
            ${racket.inStock ? "Add to bag" : "Sold Out"}
            </button>
        </div>
        </div>

    </div>
    </div>
`;
};

// ── DISPLAY RACKETS ─────────────────────────────────────────
const displayRackets = (rackets) => {
racketGrid.innerHTML = "";

if (rackets.length === 0) {
    racketGrid.innerHTML = `
    <div class="col-12 text-center py-5">
        <p style="color: var(--text-muted); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase;">
        No rackets found in this category.
        </p>
    </div>
    `;
    updateCount(0);
    return;
}

const cardsHtml = rackets.map((racket, index) => renderRacketCard(racket, index)).join("");
racketGrid.innerHTML = cardsHtml;
updateCount(rackets.length);
};

// ── FILTER LOGIC ────────────────────────────────────────────
const filterRackets = (category) => {
activeFilter = category;

const filtered = category === "all"
    ? allRackets
    : allRackets.filter((racket) => racket.category === category);

displayRackets(filtered);
};

// ── UPDATE COUNT ────────────────────────────────────────────
const updateCount = (count) => {
countDisplay.textContent = count;
};

// ── CART HANDLER ────────────────────────────────────────────
const handleAddToCart = (id, name) => {
cartCount++;
cartBadge.textContent = cartCount;

cartBadge.style.transform = "scale(1.5)";
setTimeout(() => {
    cartBadge.style.transform = "scale(1)";
}, 200);

console.log(`Added to cart: [${id}] ${name}`);
};

// ── FILTER BUTTON EVENTS ────────────────────────────────────
const initFilterButtons = () => {
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterRackets(btn.dataset.filter);
    });
});
};

// ── INIT ────────────────────────────────────────────────────
const init = async () => {
loadingState.style.display = "flex";
errorState.classList.add("d-none");

const rackets = await fetchRackets();

loadingState.style.display = "none";

if (!rackets) {
    errorState.classList.remove("d-none");
    return;
}

allRackets = rackets;
displayRackets(allRackets);
initFilterButtons();
};

// ── CART BADGE TRANSITION ───────────────────────────────────
cartBadge.style.transition = "transform 0.15s ease";

// ── START ───────────────────────────────────────────────────
init();
