const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
  watch: true,
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "../public/index.html",
      path: __dirname + "../public"
    })
  ],
  node: {
    fs: "empty"
  }
};
