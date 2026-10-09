# Publishing posts and projects

The website is built from Markdown with Astro. You can manage posts and projects in the Pages CMS browser dashboard, or edit the Markdown files directly. Changes saved to `main` trigger the existing GitHub Actions deployment.

## Use the browser dashboard

The repository includes a Pages CMS setup in `.pages.yml`.

1. Push `.pages.yml` to the repository's `main` branch.
2. Open [app.pagescms.org](https://app.pagescms.org/) and sign in with GitHub.
3. Install/authorize the Pages CMS GitHub App for the `IamSkier/Joe` repository, then open that repository.
4. Choose **Blog posts** or **Projects** in the sidebar.

### Create

Choose **New** in Blog posts or Projects, fill in the form, and save. The rich-text body editor supports headings, links, lists, and images. Cover images upload to `public/images/content/`.

New entries start with **Keep as draft** enabled, so they stay out of the public site. Turn it off to publish. For a project, enable **Show on homepage** if you also want it featured there. Saving commits the Markdown file to GitHub; a save to `main` starts the site deployment.

### Edit

Open an entry from its collection, update its fields or body, and save. The editor commits the file change to GitHub. Restore **Keep as draft** to hide an entry without deleting it.

### Rename or delete

Use the entry's actions/menu to rename or delete it. Renaming changes the Markdown filename, which also changes that entry's URL. Deleting removes the Markdown entry from the branch and the site on the next deployment. This is a real delete; GitHub commit history can be used to restore it. Deleting an entry does not necessarily delete an image it used, so remove unused uploads separately from the media area if you want to clean those up.

The dashboard edits the repository; it is not a private page hosted inside the portfolio. GitHub grants the CMS access when you authorize its app. For more about the configuration, see [Pages CMS documentation](https://pagescms.org/docs/).

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