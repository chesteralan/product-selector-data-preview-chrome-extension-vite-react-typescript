// require modules
const fs = require("fs");
const prettier = require("prettier");
const packageJson = require("./package.json");

const content = {
  name: packageJson.description,
  version: packageJson.version,
  manifest_version: 3,
  icons: {
    16: "/images/16.png",
    32: "/images/32.png",
    76: "/images/76.png",
    120: "/images/120.png",
    192: "/images/icon192.png",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      run_at: "document_end",
      js: ["content-script/main.js"],
    },
  ],
  action: {
    default_title: "Show / Hide Panels",
  },
  // background: {
  //   service_worker: "background.js"
  // },
  homepage_url:
    "https://github.com/chesteralan/product-selector-data-preview-chrome-extension-vite-react-typescript",
  permissions: [
    "storage",
    // "activeTab", "scripting" - this is used for the background option
  ],
  options_page: "options/options.html",
};

prettier
  .format(JSON.stringify(content), { semi: false, parser: "json" })
  .then((formatted) => {
    fs.writeFile("extension/manifest.json", formatted, function (err) {
      if (err) throw err;
      console.log("Manifest File Created");
    });
  });
