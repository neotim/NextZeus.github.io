var shell = require("shelljs");
var fs = require("fs");
var cmd = process.cwd();
var file = cmd + "/autocommit.txt";
fs.appendFileSync(file,'updateTime: ' + Date.now()+';\n');

var command = "cd " + cmd;
console.log("command ",command);
shell.exec(command);

command = "sh modified_git.sh";
console.log("command ",command);
shell.exec(command);

command = "git status";
console.log("command ",command);
shell.exec(command);

command = "git commit -a -m 'auto commit'";
shell.exec(command);

// command = "git push";
// shell.exec(command);
