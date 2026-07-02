import { defineConfig } from 'astro/config';

// Static blog for "Life with MTG".
//
// Base path + site are derived automatically so the same config works locally
// (root) and on a GitHub Pages *project* site (served under /<repo>/):
//   - GitHub Actions sets GITHUB_REPOSITORY="owner/repo".
//   - A repo literally named "<owner>.github.io" is a user/org site → base "/".
//   - Anything else is a project site → base "/<repo>/".
// You can override either with the SITE_URL / BASE_PATH env vars.
const repoFull = process.env.GITHUB_REPOSITORY || '';
const [owner = '', repo = ''] = repoFull.split('/');
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const base = process.env.BASE_PATH || (repo && !isUserSite ? `/${repo}/` : '/');
const site =
  process.env.SITE_URL ||
  (owner ? `https://${owner}.github.io` : 'https://example.com');

export default defineConfig({
  site,
  base,
  build: { format: 'directory' },
  trailingSlash: 'always',
});
