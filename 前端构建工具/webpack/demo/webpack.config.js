const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  mode: "production", // production  development
  //   devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: resolve("dist"),
    library: {
      name: "myLibrary",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
};
