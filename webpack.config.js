const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/client/hydrate.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "scripts.js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      CommonComps: path.resolve(__dirname, "src/client/components/common")
    },
    extensions: [".js", ".jsx", ".json", "*"]
  }
};
