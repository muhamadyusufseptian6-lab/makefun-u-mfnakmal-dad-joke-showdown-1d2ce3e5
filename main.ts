import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One dad joke, the whole entry. Written to be told out loud at the table:
// a clean pun, fresh but inside the dad joke tradition, punchline at the end.
const JOKE =
  "I named my sourdough starter Kevin — he's the only one in this house who rises before I do.";

// Resolve paths from this script's own location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

// The harness hands us these dirs; fall back to the standard paths.
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
