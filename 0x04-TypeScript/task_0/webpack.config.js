const path = require("path");

module.exports = {
  entry: "./js/main.ts", // Your entry point
  output: {
    filename: "bundle.js", // The output file name
    path: path.resolve(__dirname, "dist"), // The output directory
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
  resolve: {
    extensions: [".ts", ".js"], // Resolve both TS and JS files
  },
  mode: "development", // Or 'production' as needed
};
