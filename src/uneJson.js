const fs = require("fs");
const MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

// A loader to transform a partial manifest.json file into a complete
// manifest.json file by adding entries from an NPM package.json.
module.exports = function(source) {
  const pkg = JSON.parse(fs.readFileSync("./package.json"));
  const merged = Object.assign({}, JSON.parse(source), {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    author: pkg.author,
    homepage_url: pkg.homepage
  });
  const mergedJson = JSON.stringify(merged);
  // In Webpack, loaders ultimately produce JavaScript. In order to produce
  // another file type (like JSON), it needs to be emitted separately.
  this.emitFile("manifest.json", mergedJson);
  // Return the processed JSON to be used by the next item in the loader chain.
  return mergedJson;
};
