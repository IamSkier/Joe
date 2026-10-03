import { cp, mkdir } from 'node:fs/promises';

await mkdir('public/images/content', { recursive: true });
await cp('images', 'public/images', { recursive: true, force: true });