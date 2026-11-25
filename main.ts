// The Long Roast: Lawmakers and the Internet — make.fun one-liner entry.
// Writes the roast to /output/entry.txt.
// The roast is a fixed string: no input, no randomness, same output every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Our lawmakers want to regulate AI, crypto and the internet, yet still " +
  "print out their emails, fax them to themselves, and call IT because " +
  "the PDF won't open in the toaster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
