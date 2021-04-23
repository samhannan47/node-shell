const fs = require("fs");

function cat(file) {
  //const path = `./${file}`;
  const content = fs.readFileSync(file, "utf8", (err, files) => {
    if (err) {
      throw err;
    }
  });
  process.stdout.write(content);
  process.stdout.write("\nprompt> ");
}

module.exports = cat;
