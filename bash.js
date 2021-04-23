const ls = require("./ls.js");
const pwd = require("./pwd.js");
const cat = require("./cat.js");
const curl = require("./curl.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const ourInput = data.toString().trim().split(" ");
  const cmd = ourInput[0];
  const arg = ourInput[1];
  console.log("arg1", arg);
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat(arg);
  } else if (cmd === "curl") {
    console.log("arg", arg);
    curl(arg);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt> ");
  }
});
