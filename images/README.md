# 📸 Contact Sheet — Image Gallery

A responsive, interactive image gallery built with **HTML, CSS, and vanilla JavaScript** as part of the **CodeAlpha Web Development Internship**.

**Author:** Asif Nawaz
**Live demo:** [asifn0093.github.io/CodeAlpha_ImageGallery](https://asifn0093.github.io/CodeAlpha_ImageGallery/)

The gallery is styled as a darkroom "contact sheet" — warm amber accents, sprocket-hole film strip dividers, and grain-textured frames — with full category filtering and a keyboard-friendly lightbox viewer.

---

## ✨ Features

- **Responsive masonry-style layout** — adapts from a 4-column grid on desktop down to a single column on mobile
- **Category filters** — filter images by Portrait, Landscape, Urban, Architecture, Still Life, or Abstract
- **Lightbox view** — click any image to open it full-size
  - Next / Previous navigation buttons
  - Keyboard support (`←` `→` to navigate, `Esc` to close)
  - Live frame counter (e.g. `No. 004 · 3 / 6`)
- **Hover effects & smooth transitions** — images shift from grayscale to full color and scale slightly on hover, with animated fade-ins on load and filter changes
- **Accessible** — visible keyboard focus states, `aria` labels on interactive regions, and respects `prefers-reduced-motion`

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties, CSS columns for masonry layout, media queries, animations
- **JavaScript (ES6)** — DOM manipulation, event handling, filtering logic, lightbox state management

---

## 📁 Project Structure

```
CodeAlpha_ImageGallery/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styling, layout, and animations
├── js/
│   └── script.js       # Gallery data, filtering, and lightbox logic
└── images/
    └── frame-01.jpg … frame-18.jpg   # Gallery images
```

---

## 🚀 Getting Started

No build tools or dependencies required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/CodeAlpha_ImageGallery.git
   ```
2. Open the project folder
   ```bash
   cd CodeAlpha_ImageGallery
   ```
3. Open `index.html` directly in your browser — that's it.

---

## 🖼️ Customizing the Gallery

To use your own photos:
1. Add your image files to the `images/` folder.
2. Open `js/script.js` and update the `IMAGES` array with your filenames, categories, and captions:
   ```js
   { file: "your-photo.jpg", category: "Landscape", caption: "Your caption here" }
   ```

---

## 📌 About This Project

This project was completed as part of the **CodeAlpha Internship Program** (Web Development track).

---

## 📄 License

This project is open source and free to use for learning purposes.
