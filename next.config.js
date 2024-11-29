/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ''); // Get repository name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true, // Disable automatic image optimization for GitHub Pages
  },
};
