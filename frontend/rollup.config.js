import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
// eslint-disable-next-line import/extensions
import html from "rollup-plugin-bundle-html";


module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({
      extensions: [".js", ".html"],
      exclude: "node_modules/**",
    }),
    html({
      template: "src/index.html",
      dest: "dist/",
      filename: "index.html",
      inject: "head",
  }),
  ],
};
