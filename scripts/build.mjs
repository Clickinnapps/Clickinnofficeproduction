import { copyFile, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
await copyFile(new URL('index.html', root), new URL('index.html', output));
console.log('Website prepared in dist/');
