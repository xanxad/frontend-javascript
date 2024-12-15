const path = require("path");

module.exports = {
  entry: "./task_2/js/main.ts", // Entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "task_2/js"), // Output path
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve .ts and .js extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
