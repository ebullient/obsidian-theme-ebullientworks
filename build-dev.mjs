import path from 'node:path';
import { copyFileSync, existsSync, readFileSync } from 'fs';
import chokidar  from 'chokidar';

const devTargets = path.resolve('./.dev-target.json');
const distDir = path.resolve('./dist');

try {
  if (!existsSync(devTargets)) {
    console.log(`No ${devTargets} file found. Exiting.`);
    process.exit(0);
  }

  const data = JSON.parse(readFileSync(devTargets, 'utf-8'));

  // Initialize watcher.
  const watcher = chokidar.watch(distDir, {
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  }).on('change', (f, stats) => {
    const key = path.basename(f);
    const targets = data[key];
    if (stats) {
      console.log(`File ${f} changed size to ${stats.size}`);
    }
    if (targets === undefined) {
      return;
    } else if (Array.isArray(targets)) {
        targets.forEach((t) => {
            console.log(`copy ${key} to ${t}`);
            copyFileSync(f, path.resolve(t));
        })
    } else {
        console.log(`copy ${key} to ${targets}`);
        copyFileSync(f, path.resolve(targets));
    }
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
