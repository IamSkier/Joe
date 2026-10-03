import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const [owner, repository] = (process.env.GITHUB_REPOSITORY || '').split('/');
const site = process.env.SITE_URL || `https://${owner || 'YOUR_GITHUB_USERNAME'}.github.io`;
const isUserSite = repository?.endsWith('.github.io') ?? false;
const isCustomDomain = Boolean(process.env.SITE_URL && !site.endsWith('.github.io'));

export default defineConfig({
  site,
  base: repository && !isUserSite && !isCustomDomain ? `/${repository}` : '/',
  integrations: [sitemap()],
  build: {
    assets: '_assets'
  }
});