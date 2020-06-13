// Utility for converting Markdown blog post files to HTML
// to be rendered client-side by React.

const fs = require('fs');
const path = require('path');

// TODO: investigate the use of kramdown: https://kramdown.gettalong.org/syntax.html#math-blocks
//  or use kramed:
//    https://github.com/GitbookIO/kramed
//    https://github.com/GitbookIO/kramed/blob/master/test/tests/math.text
const mdConverter = require('marked');
const mdRenderer = new mdConverter.Renderer();

// Override image renderer to make images responsive
mdRenderer.image = function (src, title, alt) {
  let res = `<img src="${src}" class="img-fluid" title="${title}" alt="${alt}">`;
  return res;
}

mdConverter.setOptions({
  renderer: mdRenderer,
  highlight: function(code) {
    return require('highlightjs').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  langPrefix: "hljs language-",
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// Blog posts file path
// Note: path relative to the repo root dir
const postsDir = './src/client/posts/';

// Output file path
// Note: path relative to the repo root dir
const outputDir = './src/client/config/';
const outputFileName = 'blog-posts.js';

function getBlogPostRoute(fileName) {
  // Assumes fileName is of the form:
  //  <date>-<title-separated-by-dashes>.md
  const firstDashIndex = parseInt(fileName.indexOf('-'));
  const fileTypeIndex = parseInt(fileName.indexOf('.'));
  const rawTitle = fileName.slice(firstDashIndex + 1, fileTypeIndex);
  const route = rawTitle.toLowerCase();
  return route;
}

function getBlogPostTitle(fileName) {
  // Assumes fileName is of the form:
  //  <date>-<title-separated-by-dashes>.md
  const firstDashIndex = parseInt(fileName.indexOf('-'));
  const fileTypeIndex = parseInt(fileName.indexOf('.'));
  const rawTitle = fileName.slice(firstDashIndex + 1, fileTypeIndex);
  const cleanTitle = rawTitle.replace(/-/g, ' ');
  const capitalisedTitle = cleanTitle.charAt(0).toUpperCase()+ cleanTitle.slice(1);
  return capitalisedTitle;
}

function getBlogPostDate(fileName) {
  // Assumes fileName is of the form:
  //  <date>-<title-separated-by-dashes>.md
  // and that date is of the form:
  //  yyyymmdd
  const firstDashIndex = parseInt(fileName.indexOf('-'));
  const rawDate = fileName.slice(0, firstDashIndex);
  const year = rawDate.slice(0, 4);
  const month = rawDate.slice(4, 6);
  const day = rawDate.slice(6, 8);
  const date = new Date(year + '-' + month + '-' + day);
  return date.toLocaleString('en', {month: 'long', day: 'numeric', year: 'numeric'});
}

function convertBlogPosts() {
  try {
      let blogPosts = [];
      let counter = 0;
      const files = fs.readdirSync(postsDir);
      for(const file of files) {
          console.log('Converting ' + file);
          const filePath = path.join(postsDir, file);
          let content = fs.readFileSync(filePath, 'utf8');
          blogPosts.push({
              id: ++counter,
              route: getBlogPostRoute(file),
              title: getBlogPostTitle(file),
              content: mdConverter(content),
              date: getBlogPostDate(file)
          });
      }
      // console.log(blogPosts);
      console.log('Completed successfully!');
      return blogPosts;
  } catch(err) {
      console.log(err);
  }
}

function writeOutputConfig(blogPosts) {
  let outputString = `
  const blogPosts = ${JSON.stringify(blogPosts)};

  module.exports = {
      blogPosts,
  };
  `;
  fs.writeFileSync(path.join(outputDir, outputFileName), outputString);
}

const blogPosts = convertBlogPosts();
writeOutputConfig(blogPosts);
