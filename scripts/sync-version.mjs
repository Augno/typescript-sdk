#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

if (!version || typeof version !== 'string') {
  console.error('sync-version: package.json is missing a valid "version" field.');
  process.exit(1);
}

const versionTsPath = path.join(root, 'src', 'version.ts');
const content = `export const VERSION = '${version}';\n`;

fs.writeFileSync(versionTsPath, content, 'utf8');
console.log(`sync-version: wrote ${versionTsPath} (${version})`);
