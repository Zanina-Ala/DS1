const fs = require("fs");

if (fs.existsSync("./dist")) {
  console.log("✔ Smoke test passed: dist folder exists");
  process.exit(0);
} else {
  console.log("✘ Smoke test failed: dist folder missing");
  process.exit(1);
}
