/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.hexagonstudio.pe/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
