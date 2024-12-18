/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://instix-next.vercel.app/",
  generateRobotsTxt: true, // Generate robots.txt file
  // ...other options
  additionalPaths: async (config) => [
    {
      loc: "https://instix-next.vercel.app/",
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 1.0,
    },
  ],
};