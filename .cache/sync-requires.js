// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-template-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/templates/articleTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/pages/about.js")),
  "component---src-pages-articles-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/pages/articles.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/jgaviria/Documents/Development/www.julian.is/src/pages/page-2.js"))
}

