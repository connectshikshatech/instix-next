/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://instix.io",
  generateRobotsTxt: true, // Generate robots.txt file
  // ...other options
  additionalPaths: async (config) => [
    {
      loc: "https://instix.io/",
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 1.0,
    },
  ],
};