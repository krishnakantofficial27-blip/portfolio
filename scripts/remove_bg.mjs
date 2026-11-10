import { removeBackground } from "@imgly/background-removal-node";
import fs from "node:fs";
import path from "node:path";

async function main() {
  const input = "public/images/krishna-portrait.png";
  const output = "public/images/krishna-portrait-cutout.png";
  console.log("Removing background from:", input);

  const blob = await removeBackground(input);
  const buffer = Buffer.from(await blob.arrayBuffer());
  fs.writeFileSync(output, buffer);
  console.log("SUCCESS! Saved transparent cutout to:", output);
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});

