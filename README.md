# dreamsincode

Personal portfolio site for Nidhi Iyer. Dark, dreamy, nature-at-night aesthetic — static HTML/CSS/JS deployed on GitHub Pages.

## Updating Content

**All content lives in the `const D = { ... }` object at the top of `script.js`.**
Open `script.js` on GitHub, edit the values, commit. Done. No HTML knowledge needed.

`site-data.json` is a reference copy of the same data in JSON format.

### Quick reference

| What to update | Field in `script.js` → `const D` |
|---|---|
| Hero bio | `bio` |
| Current learning topic | `status.learning.value` |
| LeetCode count | `status.leetcode.value` and `.detail` |
| Now strip text | `now.text`, `now.week` |
| Progress bars | `now.week` (auto-calculates %) |
| Learning pills | Move items from `learning.upcoming` → `learning.active` |
| Projects | Add/edit objects in `projects` array |
| Writing/blog | Add objects to `writing` array |
| Firefly facts | Add strings to `fireflyFacts` array |
| Links | `email`, `linkedin`, `github` |

### Adding a project

Add an object to the `projects` array in `script.js`:
```js
{ tag: "category", title: "Project Name", desc: "One-liner.", url: "https://github.com/..." }
```
Leave `url` as `""` for projects without a link.

### Adding a blog post

Add to the `writing` array in `script.js`:
```js
{ title: "Post Title", date: "Month Year", url: "https://linkedin.com/..." }
```

### Resume PDF

Replace `resume.pdf` in the repo root and update any link in `index.html`.

## Deploy

```bash
git init
git add .
git commit -m "launch dreamsincode"
git remote add origin https://github.com/[username]/dreamsincode.git
git push -u origin main
```

Then on GitHub:

1. Go to **Settings → Pages**
2. Source: **main** branch, folder: **/ (root)**
3. Save

Live at: `https://[username].github.io/dreamsincode`

## Stack

- HTML, CSS, vanilla JS — no build step, no dependencies
- Google Fonts (Cormorant Garamond, DM Sans) via CDN
- GitHub Pages for hosting
