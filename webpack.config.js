const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "public/js"), // string
    filename: "bundle.js" // string
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  watch: false,
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "../index.html",
      path: __dirname + "../public"
    })
  ],
  node: {
    fs: "empty"
  }
};
