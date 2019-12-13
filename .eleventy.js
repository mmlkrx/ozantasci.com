module.exports = function(config) {
  config.addPassthroughCopy("site/img"); // pass images folder right through to output folder
  config.addPassthroughCopy("site/videos"); // pass videos folder right through to output folder
  config.addPassthroughCopy("site/js"); // pass js folder right through to output folder
  config.addPassthroughCopy("site/_redirects"); // _redirects file must be in deployed folder for Netlify

  return {
    dir: {
      input: "site",
      output: "_site"
    }
  };
};
