# Publishing posts and projects

The website is built from Markdown with Astro. Add files locally, preview the site, and push to `main`; GitHub Actions builds and deploys the site to GitHub Pages.

## Write a blog post

Copy `src/content/posts/first-post.md` to a new filename such as `my-post.md`, then edit the frontmatter and article body. Set `draft: false` when it is ready to publish:

```md
---
title: "A useful, specific title"
date: 2026-10-01
summary: "A one- or two-sentence introduction for listings and search results."
cover: "/images/content/my-post.jpg"
tags: [development, notes]
draft: false
---

Start writing here. Markdown headings, links, images, lists, quotes, and fenced code blocks are supported.
```

## Add a project

Copy `src/content/projects/first-project.md` to a new filename such as `my-project.md`, then replace the project details. Set `draft: false` when it is ready to publish:

```md
---
title: "Project name"
summary: "What it does and why it matters."
cover: "/images/content/my-project.jpg"
technologies: [JavaScript, Django]
liveUrl: "https://example.com"
sourceUrl: "https://github.com/your-name/project"
featured: true
draft: false
---

Explain the problem, your contribution, important implementation choices, and outcome.
```

All fields except `title` and `summary` can be omitted. Use `draft: true` to keep an entry out of the public site. Copy its image into `public/images/content/` and use the matching `/images/content/...` path for the cover. In Markdown body text, link to an image with `![Description](../../images/content/detail.jpg)`.

## Preview and publish

Run `npm install` once, then `npm run dev` to preview locally. Run `npm run build` to check the production site. Commit and push to `main`; the GitHub Actions workflow deploys the `dist/` folder.

## One-time GitHub Pages setup

In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source. The workflow currently builds a project site at `https://OWNER.github.io/REPOSITORY/`. For a custom domain, change `SITE_URL` in `.github/workflows/deploy.yml`, add the domain to `public/CNAME`, and configure the domain's DNS records with your registrar.

## Personal details to fill in

Update `src/consts.ts` with your preferred display name, email, GitHub username, and LinkedIn profile. The default workflow site URL is your `github.io` domain; repository subpaths are detected automatically. Set a custom `SITE_URL` only when using your own domain.