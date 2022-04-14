module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.setBrowserSyncConfig({
    files: "./src/css/*.css",
    notify: true,
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
