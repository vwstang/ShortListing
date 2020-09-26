const path = require("path");

module.exports = {
  entry: "",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "scripts.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          },
          exclude: /node_modules/
        }
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx", ".json", "*"] }
};
