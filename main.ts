#!/usr/bin/env node
const term = require("terminal-kit").terminal;
const fs = require("fs");

const path = process.argv[2];

function termArg(arg: string, def: string) {
  return process.argv.includes("--" + arg) ? process.argv[process.argv.indexOf("--" + arg) + 1] : def;
}

if(fs.existsSync(path)) {
  const size = parseInt(termArg("size", "-1"));
  const width = parseInt(termArg("width", term.width));
  const height = parseInt(termArg("height", (term.height * (size == -1 ? 2 : size)) + "" ));
  term.drawImage(path, { shrink: { width, height } });
} else {
  term.red("Not found!\n")
}

