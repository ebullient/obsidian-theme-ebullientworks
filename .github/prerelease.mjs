import path from 'node:path';
import { readdirSync, readFile, readFileSync, writeFile } from 'fs';

const packageJson = path.resolve('./package.json');
const distDir = path.resolve('./dist');

try {
    const json = JSON.parse(readFileSync(packageJson));
    readdirSync(distDir).forEach(file => {
        const fullName = path.resolve(distDir, file);
        console.log(fullName);
        readFile(fullName, 'utf8', function (err, data) {
            if (err) {
              return console.log(err);
            }
            data = data.replace(/\$version\$/g, json.version);

            writeFile(fullName, data, 'utf8', function (err) {
               if (err) return console.log(err);
            });
          });
    });
} catch (err) {
    console.error(err);
    process.exit(1);
}
