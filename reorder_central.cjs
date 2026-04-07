const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const targetCentralGirls = ["小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];

const arrayRegex = /export const girls = \[([\s\S]*)\];/;
const match = data.match(arrayRegex);
if (!match) process.exit(1);

const content = match[1];
const blocks = [];
let braceCount = 0;
let current = '';
let inString = false;
let quoteChar = '';

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  if ((char === '"' || char === "'") && content[i-1] !== '\\') {
    if (!inString) {
      inString = true;
      quoteChar = char;
    } else if (char === quoteChar) {
      inString = false;
    }
  }

  current += char;
  if (!inString) {
    if (char === '{') braceCount++;
    if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        blocks.push(current.trim().replace(/^,/, '').trim());
        current = '';
      }
    }
  }
}

const girls = blocks.map(block => {
  const cnMatch = block.match(/cn:\s*"([^"]+)"/);
  const name = cnMatch ? cnMatch[1] : "";
  const locationMatch = block.match(/location:\s*"([^"]+)"/);
  const location = locationMatch ? (locationMatch[1] || "").trim() : "";
  return { name, location, block };
});

const cbdGirls = girls.filter(g => g.location === "CBD");
const centralGirls = girls.filter(g => g.location === "Central" || g.location === "Central " || g.location === "中区");
const otherGirls = girls.filter(g => g.location !== "CBD" && g.location !== "Central" && g.location !== "Central " && g.location !== "中区");

// Reorder Central
const sortedCentral = [];
targetCentralGirls.forEach(name => {
  const found = centralGirls.find(g => g.name === name);
  if (found) sortedCentral.push(found);
});
centralGirls.forEach(g => {
  if (!sortedCentral.includes(g)) sortedCentral.push(g);
});

const finalSorted = [...cbdGirls, ...sortedCentral, ...otherGirls];

// Sequence IDs
finalSorted.forEach((g, idx) => {
  const newId = idx + 1;
  g.block = g.block.replace(/id:\s*\d+/, `id: ${newId}`);
});

const newContent = "\n  " + finalSorted.map(g => g.block).join(",\n  ") + "\n";
const finalData = data.replace(arrayRegex, `export const girls = [${newContent}];`);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Done');
