# 🎾 ACE COURT — Tennis Racket Store

> A premium tennis racket catalog landing page inspired by the clay courts of Roland Garros. Built with HTML, CSS, JavaScript, Bootstrap, and JSON Server. 

---

## 🌐 Live Demo

| Platform | Link |
|---|---|
| GitHub Pages | [Visit Site](https://nachogg23.github.io/Tienda-raquetas-tenis/) |
| Vercel | [Visit Site](https://tienda-raquetas-tenis.vercel.app) |

---

## 📋 Theme

**AceCourt** is a high-end tennis racket catalog. It showcases 12 professional rackets from the world's top brands — Wilson, Babolat, Head, Yonex, Dunlop, and Tecnifibre — displayed as interactive Bootstrap cards loaded dynamically from a local JSON file.

The project was built as part of a web development course, with the goal of creating a visually compelling product catalog using modern front-end technologies. The theme was chosen for its rich visual identity — clay courts, bold typography, and the culture of professional tennis all provide a strong design foundation.

---

## 🎨 Design Explanation

The visual identity draws entirely from **professional tennis and the Roland Garros clay court aesthetic**:

- **Color palette**: Deep clay reds and browns (`#6b2d0f`) as the base, with warm ochre and cream accents (`#f0d4b0`). Every color references the iconic red clay of the French Open.
- **Typography**: `Oswald` (Google Fonts) for display headings — tall, condensed, bold, and immediately sporty. `Lato` for body copy — clean, modern, and highly legible at all sizes. No AI-generated or system fonts used.
- **Gradients**: Fully custom diagonal clay gradients across the hero, cards, and buttons. Each category badge has its own distinct gradient (red for Power, brown for Control, purple for Beginner). No Bootstrap default colors used anywhere.
- **Hero section**: Full-width clay gradient background with a decorative SVG tennis court rendered in 3D perspective on the right side. The court was drawn manually with accurate line layout — service lines, doubles lines, central service line, net, and baseline center marks.
- **Card design**: Each card features a fixed-height image container with `object-fit: contain` to ensure all racket images display consistently regardless of their original dimensions.
- **Motion & interaction**: Cards stagger in with a reveal animation on load. Hovering lifts cards with a warm glow border. A bouncing tennis ball appears during loading. The cart badge pulses when a racket is added.
- **Sound design**: A tennis hit sound effect plays on every "Add to Bag" click, adding an immersive and memorable touch to the experience.

---

## 🖼 Screenshots

### Hero Section
![Hero](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265741/Captura_de_pantalla_2026-05-20_102630_nwoxnz.png)

### Card Grid
![Grid](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265955/Captura_de_pantalla_2026-05-20_103130_zqyqbo.png)

### Filter Active
![Filter](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265956/Captura_de_pantalla_2026-05-20_103107_jay4t2.png)

---

## 🚀 Running the Project Locally

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Live Server extension in VS Code

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/nachogg23/Tienda-raquetas-tenis.git
cd Tienda-raquetas-tenis

# 2. Install dependencies
npm install

# 3. Open index.html with Live Server in VS Code
# Right click on index.html → Open with Live Server
```

> The project loads data directly from `json/db.json` — no JSON Server command needed to view the catalog.

---

## 📁 Project Structure

```
Tienda-raquetas-tenis/
├── json/
│   └── db.json        # Mock database with 12 rackets
├── .gitignore         # Files ignored by Git
├── app.js             # JavaScript logic (fetch, render, filter)
├── index.html         # Main HTML structure
├── README.md          # This file
└── style.css          # All custom styles (no inline CSS)
```

---

## ⚙️ Technologies Used

| Tech | Version | Purpose |
|---|---|---|
| HTML5 | — | Page structure and semantics |
| CSS3 | — | Custom styling, animations, gradients |
| JavaScript | ES6+ | Fetch API, async/await, DOM rendering |
| Bootstrap | 5.3 | Card component, grid system, navbar |
| JSON Server | 1.0.0-beta | Mock REST API for racket data |
| Google Fonts | — | Oswald + Lato typography |
| Bootstrap Icons | 1.11 | UI icons throughout the page |
| Cloudinary | — | Image hosting |

---

## ✅ Features

### Core
- ✔ 12 dynamic racket cards loaded from a local JSON file
- ✔ Data fetched using `fetch` with `async/await`
- ✔ Dynamic DOM rendering via JavaScript template literals
- ✔ Category filter — All / Power / Control / Beginner
- ✔ Live results counter updates on filter change

### Cards
- ✔ Color-coded category badges per racket type
- ✔ In Stock / Sold Out badge per card
- ✔ Star rating display generated dynamically
- ✔ Weight indicator with icon on each card
- ✔ Prices displayed in euros

### UX & Design
- ✔ Add to bag counter with pulse animation
- ✔ Tennis hit sound effect on add to cart
- ✔ Staggered card reveal animation on page load
- ✔ Hover lift + warm clay glow border effect
- ✔ Stats bar — models, brands, delivery, authenticity
- ✔ SVG tennis court in hero section with accurate line layout
- ✔ Bouncing tennis ball loading animation
- ✔ Error state displayed if data fails to load
- ✔ Fully responsive across mobile, tablet, and desktop
- ✔ All images hosted on Cloudinary

---

## 🔮 Future Ideas

These are features and improvements planned for future versions:

### Functionality
- **Search bar** — Real-time search by racket name or brand
- **Sort by price** — Dropdown to sort from lowest to highest price and vice versa
- **Filter by brand** — Wilson, Babolat, Head filters in addition to category
- **Racket comparison** — Select two rackets and compare specs side by side
- **Product detail page** — Full page with extended specs, user reviews, and related rackets
- **Real shopping cart** — Quantity controls, subtotal, and checkout simulation
- **Favorites / Wishlist** — Save rackets using localStorage
- **Pagination or infinite scroll** — For when the catalog grows beyond 12 items

### Design & UX
- **Dark / Light mode toggle** — Switch between clay dark and a bright outdoor court theme
- **Scroll animations** — Cards and sections animate in as the user scrolls
- **Loading skeletons** — Placeholder card shapes while data loads
- **Image zoom on hover** — Magnify racket details on mouse over

### Content
- **More rackets** — Expand to 30+ rackets including junior and beginner models
- **String recommendations** — Suggested strings and tension for each racket
- **Player profiles** — Link each racket to the professional player who uses it
- **Blog section** — Articles on racket technology, string selection, and maintenance

### Technical
- **Real backend** — Replace JSON file with a Node.js + Express REST API
- **Database** — Store data in MongoDB or PostgreSQL
- **User authentication** — Accounts, saved carts, and order history
- **Admin dashboard** — Add, edit, and delete rackets without touching code
- **PWA support** — Make the app installable as a Progressive Web App
- **Unit testing** — Jest tests for all JavaScript functions

---

## 🎾 About Tennis Rackets

Understanding racket types helps players make better purchasing decisions:

- **Power rackets** — Lighter frames (under 300g) with a larger head size. Generate power effortlessly. Ideal for beginners and intermediate players. Examples: Babolat Pure Aero, Babolat Pure Drive.
- **Control rackets** — Heavier frames (310g+) with a smaller head size. Preferred by advanced and professional players who prioritize precision and feel. Examples: Wilson Pro Staff RF97, Head Speed Pro.
- **Beginner rackets** — Balanced weight, large sweet spot, and forgiving frame. Built for recreational players just getting started. Examples: Tecnifibre TF-X1, Wilson Clash 100 Pro.

---

## 🙏 Credits

- Racket images hosted on [Cloudinary](https://cloudinary.com)
- Icons by [Bootstrap Icons](https://icons.getbootstrap.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- UI framework by [Bootstrap](https://getbootstrap.com)
- Mock API by [JSON Server](https://github.com/typicode/json-server)

---

## 📝 Code Standards

- All code written in **English**
- **camelCase** for all variables, functions, and CSS class names
- No CSS inline styles anywhere in the project
- Modular, clean, and DRY JavaScript
- Semantic HTML with accessibility in mind
- Frequent and descriptive Git commits throughout development