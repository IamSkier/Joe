import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { sitePath } from '../utils/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const feedImageUrl = new URL(sitePath('images/sipme.png'), context.site).toString();

  return rss({
    title: `${SITE.name} | Writing`,
    description: SITE.description,
    site: context.site!,
    image: {
      url: feedImageUrl,
      title: `${SITE.name} | Writing`,
      link: new URL(sitePath(''), context.site).toString()
    },
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: sitePath(`blog/${post.id}/`)
    }))
  });
};