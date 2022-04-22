const Common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(Common, {
    mode: "production",
    devTool: "source-map",
});