import path from 'node:path';
import { copyFileSync, existsSync, readFileSync } from 'fs';

const devTargets = path.resolve('./.dev-target.json');
const distDir = path.resolve('./dist');

try {
  if (!existsSync(devTargets)) {
    console.log(`No ${devTargets} file found. Exiting.`);
    process.exit(0);
  }

  const data = JSON.parse(readFileSync(devTargets, 'utf-8'));
  Object.keys(data).forEach((key) => { 
    const srcFile = path.resolve(distDir, key);
    const targets = data[key];
    if (targets === undefined) {
      return;
    } else if (Array.isArray(targets)) {
        targets.forEach((t) => {
            console.log(`copy ${key} to ${t}`);
            copyFileSync(srcFile, path.resolve(t));
        })
    } else {
        console.log(`copy ${key} to ${targets}`);
        copyFileSync(srcFile, path.resolve(targets));
    }
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
