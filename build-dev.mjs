import path from 'node:path';
import { copyFileSync, existsSync, readFileSync, statSync } from 'fs';
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
  chokidar.watch(distDir, {
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  }).on('change', (f) => {
    const key = path.relative(distDir, f);
    console.log(`🚀 ${key} changed`);
    const targets = data[key];
    if (targets === undefined) {
      return;
    } else if (Array.isArray(targets)) {
        targets.forEach((t) => {
            const resolvedTarget = path.resolve(t);
            const destPath = existsSync(resolvedTarget) && statSync(resolvedTarget).isDirectory()
              ? path.join(resolvedTarget, key)
              : resolvedTarget;
            console.log(`copy ${key} to ${destPath}`);
            copyFileSync(f, destPath);
        })
    } else {
        const resolvedTarget = path.resolve(targets);
        const destPath = existsSync(resolvedTarget) && statSync(resolvedTarget).isDirectory()
          ? path.join(resolvedTarget, key)
          : resolvedTarget;
        console.log(`copy ${key} to ${destPath}`);
        copyFileSync(f, destPath);
    }
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
