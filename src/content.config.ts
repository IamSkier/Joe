import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalString = z.preprocess((value) => value === '' ? undefined : value, z.string().optional());
const optionalUrl = z.preprocess((value) => value === '' ? undefined : value, z.string().url().optional());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: optionalString,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    summary: z.string(),
    cover: optionalString,
    technologies: z.array(z.string()).default([]),
    liveUrl: optionalUrl,
    sourceUrl: optionalUrl,
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts, projects };