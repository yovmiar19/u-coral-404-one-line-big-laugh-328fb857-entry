import { writeFileSync, mkdirSync } from "node:fs";

// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Opus #7 pick (verified 115 chars, inside the 1–200 char gate).
// The line is a single sentence; the double quotes around "exercise,"
// and "week." are part of the joke and must be kept exactly.
const ENTRY =
  'When I told my doctor I exercise twice a week, ' +
  'she asked me to define "exercise," and I asked her to define "week."';

const GATE_MIN = 1;
const GATE_MAX = 200;

function publishEntry(): void {
  if (ENTRY.length < GATE_MIN || ENTRY.length > GATE_MAX) {
    throw new Error(`entry is ${ENTRY.length} chars, outside the ${GATE_MIN}-${GATE_MAX} gate`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

publishEntry();
