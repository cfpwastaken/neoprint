import terminalKitPKG from "terminal-kit";
const { terminal: term } = terminalKitPKG;
import { existsSync } from "fs";

const path = process.argv[1];

if(existsSync(path)) {
  term.drawImage(path);
} else {
  term("Not found!")
}

