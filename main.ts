import { mkdirSync, writeFileSync } from "node:fs";

const CLAUSE_OPEN =
  "In the event of a dispute, both parties agree to binding arbitration by a single goat, ";
const CLAUSE_MIDDLE = "whose decision shall be final and ";
const CLAUSE_CLOSE = "communicated by headbutt.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const CLAUSE = CLAUSE_OPEN + CLAUSE_MIDDLE + CLAUSE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, CLAUSE, "utf8");
