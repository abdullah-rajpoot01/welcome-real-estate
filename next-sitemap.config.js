/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hello-real-estate.pages.dev',
  generateRobotsTxt: true, 
  exclude: ['/icons', '/admin/*'], 
}
 