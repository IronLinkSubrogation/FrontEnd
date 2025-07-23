# IronLink CRM – Frontend

This repository contains the static frontend architecture for IronLink CRM. It is built entirely with raw HTML, CSS, and JavaScript to align with infrastructure preferences—no frameworks, no build tools, and no external dependencies.

## 📁 Folder Structure

public/
├── index.html
├── pages/
│   ├── dashboard.html
│   ├── diary.html
│   └── notes.html
└── components/
    └── header.html

scripts/
└── main.js

styles/
└── main.css

package.json
README.md
.gitignore

## 🖥️ Render Deployment (Static Site)

- **Build Command**: leave blank or set to `npm run build`
- **Publish Directory**: `public`
- **Root Directory**: leave blank (if `package.json` is at root)

## ✅ Current Features

- Routed static pages (`/dashboard`, `/diary`, `/notes`)
- Shared header navigation via HTML `<object>` inclusion
- Form submission handling with JavaScript alerts
- Audit trail layout on notes page
- CSS styling for consistent UI and readable UX

## 📌 Next Features

- UI enhancements (status tags, timeline markers)
- Local storage caching for notes and diary entries
- API integration hooks if backend endpoints are introduced
