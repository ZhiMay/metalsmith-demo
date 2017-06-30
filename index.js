var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var jade = require('metalsmith-jade');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(jade())
  .use(permalinks())
  .use(layouts({
    engine: 'jade',
    "directory": "./src/layouts"
  }))
  .use(serve({
    port: 4010,
    verbose: true
  }))
  .use(watch({
    paths: {
      "${source}/**/*": true
    },
    livereload: true
  }))
  .build(function(err, files) {
    if (err) { throw err; }else{
      console.log("the site compile sucess .......");
    }
  });
