// On a GitHub Pages project site (e.g. satsie.github.io/boss-challenge) the site is served from a
// subpath. The deploy workflow passes that subpath in as PAGES_BASE_PATH; it's empty for a custom
// domain and for local dev, so paths stay at the root there.
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  // Export each page as <route>/index.html so client-side navigation finds its data files
  // (e.g. the home page's index.txt) when the site is served from a subpath.
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
