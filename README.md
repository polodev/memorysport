# 🧠 Memory Sport Training System

A fast, lightweight, and modern web application for practicing competitive memory techniques: **Dominic PAO System**, **Memory Palaces (Method of Loci)**, **Peg Systems**, **Pi Memorization**, and **Mental Math Drills**.

---

## ⚡ Modern Non-Node.js Stack

This project was rewritten from legacy Gatsby v1 to a **100% non-Node.js** architecture:

* **Static Site Generator**: [Hugo](https://gohugo.io/) (compiles 23+ pages in ~150ms).
* **Interactivity**: [Alpine.js](https://alpinejs.dev/) via CDN (lightweight reactive state for drills, timers, and quizzes).
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) via CDN (responsive, modern UI).
* **Markdown & Syntax Highlighting**: [Marked.js](https://marked.js.org/) & [Prism.js](https://prismjs.com/) via CDN for flashcard code decks.
* **Data Organization**: Pure, human-editable `.json` files inside the `data/` folder.
* **Zero Vulnerabilities**: No `package.json`, no `node_modules`, no npm dependencies, no Dependabot alerts.
* **Zero GitHub Actions Credits**: Direct static deployment to the `gh-pages` branch without triggering GitHub Actions runners.

---

## 📁 Data Files (`data/`)

All mnemonic records are stored in clean JSON files:

| File | Content |
| :--- | :--- |
| [`data/dominic.json`](data/dominic.json) | 0-9 digit-to-letter codes and 100 Person-Action-Object (00-99) records with images. |
| [`data/catloci.json`](data/catloci.json) | 22 real-world architectural memory palaces with rooms and station nooks. |
| [`data/detailloci.json`](data/detailloci.json) | Step-by-step ordered memory journeys with room transitions. |
| [`data/villageloci.json`](data/villageloci.json) | 145 village bari/houses sequence. |
| [`data/pegs.json`](data/pegs.json) | Number-Rhymes (1-10), Number-Shapes (0-9), Major System (0-9), Alphabet Pegs (A-Z). |
| [`data/pi.json`](data/pi.json) | 4,400 decimal digits of Pi for Dominic PAO memorization. |
| [`data/calculation.json`](data/calculation.json) | Configurations for mental arithmetic drills. |
| [`data/decks.json`](data/decks.json) | Spaced repetition programming flashcard decks (JS, PHP, Markdown). |
| [`data/routine.json`](data/routine.json) | Daily training routine schedule and planned hours. |

---

## 🚀 Local Development

To run the site locally with live reloading:

```bash
hugo server
```

Open `http://localhost:1313/memorysport/` (or `http://localhost:1313/`) in your browser.

---

## 🚢 Deployment (Zero GitHub Actions Credits)

To deploy to GitHub Pages without consuming any GitHub Actions compute credits:

```bash
./deploy.sh
```

This compiles the static files locally into `public/` and pushes directly to the `origin/gh-pages` branch. GitHub Pages serves the branch statically, consuming **0 GitHub Actions minutes**.
