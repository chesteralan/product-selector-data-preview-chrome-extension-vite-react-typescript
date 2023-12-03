// require modules
const fs = require("fs");
const archiver = require("archiver");

const zipFile = __dirname + "/extension.zip";

// delete existing
fs.unlink(zipFile, function(err) {
  // create a file to stream archive data to.
  const output = fs.createWriteStream(zipFile);
  const archive = archiver("zip", {
    zlib: { level: 9 }, // Sets the compression level.
  });
  archive.pipe(output);
  archive.directory("extension/", false);
  archive.finalize();
});
