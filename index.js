#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

// List of folders to create
const folders = [
  "src/app/contexts",
  "src/app/hook",
  "src/app/services",
  "src/assets/icon",
  "src/assets/images",
  "src/components/core",
  "src/components/router",
  "src/components/sections",
  "src/constants",
  "src/lib",
  "src/pages",
  "src/util",
  "public",
];

async function createDirectories(basePath) {
  try {
    for (const folder of folders) {
      const dirPath = path.join(basePath, folder);
      await fs.ensureDir(dirPath);
      console.log(`Created directory: ${dirPath}`);

      const gitKeepFilePath = path.join(dirPath, ".gitkeep");
      await fs.ensureFile(gitKeepFilePath);
      console.log(`Created .gitkeep in: ${dirPath}`);
    }
    console.log(
      "React folder structure with .gitkeep files has been set up successfully!"
    );
  } catch (error) {
    console.error("Error creating directories and .gitkeep files:", error);
    process.exit(1);
  }
}

function main() {
  const currentDirectory = process.cwd();
  createDirectories(currentDirectory);
}

main();
