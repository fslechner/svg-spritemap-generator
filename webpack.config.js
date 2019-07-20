const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

module.exports = {
  plugins: [new SVGSpritemapPlugin("src/icons/*.svg")]
};
