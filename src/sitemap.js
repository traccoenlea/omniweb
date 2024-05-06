const sitemap = require("sitemap");
const hostname = "https://www.omnistos.fr";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/agence", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/projets", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "monthly", priority: 0.8 },
  { url: "/recrutement", changefreq: "monthly", priority: 0.8 },
  { url: "/mentionslegales", changefreq: "monthly", priority: 0.5 },
  { url: "/cgu", changefreq: "monthly", priority: 0.5 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require("fs");

// Write sitemap to public directory
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
