# alexanderterry.me

Personal portfolio site for Alexander Terry, embedded software engineer. Live at **[alexanderterry.me](https://alexanderterry.me)**.

Plain HTML, CSS and JavaScript. No build step.

## Structure

```
index.html                   the page
style.css / script.js        styles and behavior (nav, scroll reveal)
favicon.svg                  site icon
Alexander-Terry-Resume.pdf   resume linked from the site
img/                         photos, project screenshots, company logos
CNAME                        custom domain for GitHub Pages
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## CI/CD

`.github/workflows/ci-cd.yml` runs on every push and pull request:

1. **Validate**: checks `index.html` with [html-validate](https://html-validate.org) and makes sure every local link, image and `#anchor` resolves, using [lychee](https://github.com/lycheeverse/lychee).
2. **Deploy**: on `master` only, once validation passes, publishes the site files to GitHub Pages.

Pages must be set to deploy from **GitHub Actions** (Settings → Pages → Source).
