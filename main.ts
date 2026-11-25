// Your Agent in One Emoji — entry: a single glyph, the octopus.
// An agent is many arms at once: watching, fetching, fixing, remembering,
// all in parallel while its human sleeps. One glyph says all of that.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🐙";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One glyph only: no trailing newline, no caption — the gate counts characters.
writeFileSync(`${outDir}/entry.txt`, EMOJI, "utf8");
