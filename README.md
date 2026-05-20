ACE COURT — Tennis Racket Store

A premium tennis racket catalog landing page. Built with HTML, CSS, Bootstrap, and JSON Server.


📋 Theme
AceCourt is a high-end tennis racket catalog inspired by the clay courts of Roland Garros. It showcases 12 professional rackets from the world's top brands — Wilson, Babolat, Head, Yonex, Dunlop, Tecnifibre, and more — displayed as interactive Bootstrap cards loaded dynamically from a local JSON file.

🎨 Design Explanation
The visual identity is inspired by professional tennis and the clay court aesthetic:

Color palette: Deep clay reds and browns (#6b2d0f) as the base, with warm ochre and cream accents (#f0d4b0). The palette references the iconic red clay of Roland Garros.
Typography: Oswald (Google Fonts) for display headings — tall, bold, and sporting. Lato for body copy — clean and highly legible at all sizes.
Gradients: Custom diagonal clay gradients on the hero and cards. Distinct per-category badge gradients (red for Power, brown for Control, purple for Beginner). No default Bootstrap colours used.
Layout: Full-width hero with decorative diagonal mesh pattern referencing a tennis net. Stats bar below the hero. Sticky filter bar above the card grid.
Motion: Cards stagger in on load. Hover lifts cards with a warm glow border. Tennis ball loading indicator bounces. Cart badge pulses on add.
Sound: Tennis hit sound effect plays when adding a racket to the cart.


## 🖼 Screenshots

### Hero Section
![Hero](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265741/Captura_de_pantalla_2026-05-20_102630_nwoxnz.png)

### Card Grid
![Grid](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265955/Captura_de_pantalla_2026-05-20_103130_zqyqbo.png)

### Filter Active
![Filter](https://res.cloudinary.com/dxpvtyfd5/image/upload/v1779265956/Captura_de_pantalla_2026-05-20_103107_jay4t2.png)

🚀 Running the Project Locally
Prerequisites

Node.js installed
Live Server extension in VS Code

Steps
bash# 1. Clone the repository
git clone https://github.com/nachogg23/Tienda-raquetas-tenis.git
cd Tienda-raquetas-tenis

# 2. Install dependencies
npm install

# 3. Open index.html with Live Server in VS Code
# Right click on index.html → Open with Live Server

The project loads data directly from json/db.json — no JSON Server command needed.


📁 Project Structure
Tienda-raquetas-tenis/
├── images/            # Racket images
├── json/
│   └── db.json        # Mock database with 12 rackets
├── sounds/
│   └── tennis-hit.mp3 # Sound effect on add to cart
├── index.html         # Main HTML structure
├── main.js            # JavaScript logic (fetch, render, filter)
├── style.css          # All custom styles (no inline CSS)
├── package.json       # Project dependencies
└── README.md          # This file

⚙️ Technologies Used
TechPurposeHTML5Page structure and semanticsCSS3Custom styling, animations, gradientsJavaScript (ES6+)Fetch API, async/await, DOM renderingBootstrap 5.3Card component, grid system, navbarJSON ServerMock REST API for racket dataGoogle FontsOswald + Lato typographyBootstrap IconsUI icons throughout the pageCloudinaryImage hosting

🌐 Live Demo

🔗 GitHub Pages: https://nachogg23.github.io/Tienda-raquetas-tenis/
🔗 Vercel: (coming soon)


✅ Features

✔ 12 dynamic racket cards loaded from JSON file
✔ Category filter (All / Power / Control / Beginner)
✔ Color-coded category badges per racket type
✔ In Stock / Sold Out badge per card
✔ Star rating display
✔ Weight indicator on each card
✔ Add to bag counter with animation
✔ Tennis hit sound effect on add to cart
✔ Staggered card reveal animation on load
✔ Hover lift + warm glow effect
✔ Stats bar (models, brands, delivery, authenticity)
✔ Fully responsive (mobile → desktop)
✔ Bouncing ball loading animation
✔ All images hosted on Cloudinary


📝 Code Standards

All code written in English
camelCase for all variables, functions, and CSS class names
No CSS inline styles anywhere
Semantic HTML structure