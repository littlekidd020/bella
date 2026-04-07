const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

// The reorder or update process might have left duplicates or messed up formatting.
// Let's do a more robust string-based repair.
const arrayRegex = /export const girls = \[([\s\S]*)\];/;
const match = data.match(arrayRegex);
if (!match) process.exit(1);

const content = match[1];
const items = [];
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
        items.push(current.trim().replace(/^,/, '').trim());
        current = '';
      }
    }
  }
}

const idMappings = {
  "小绵羊": 13,
  "泰妹": 14,
  "盲盒": 15,
  "语橙": 16,
  "羽西": 17,
  "思思": 18
};

// Process each block: fix the requested IDs, and resolve collisions by incrementing others
const processed = items.map(block => {
  const cnMatch = block.match(/cn:\s*"([^"]+)"/);
  const name = cnMatch ? cnMatch[1] : "";
  const idMatch = block.match(/id:\s*(\d+)/);
  let id = idMatch ? parseInt(idMatch[1]) : 0;
  
  if (idMappings[name]) {
    id = idMappings[name];
    block = block.replace(/id:\s*\d+/, `id: ${id}`);
  }
  
  return { name, id, block };
});

// Avoid duplicate blocks in our list (just in case)
const uniqueBlocks = [];
const seenNames = new Set();
processed.forEach(p => {
  if (!seenNames.has(p.name)) {
    uniqueBlocks.push(p);
    seenNames.add(p.name);
  }
});

// For any collisions on the target IDs (13-18), we need to shift the original ones 
// that weren't part of our target list.
const targetIds = new Set(Object.values(idMappings));
uniqueBlocks.forEach(p => {
  if (!Object.keys(idMappings).includes(p.name)) {
    // If this girl has an ID that is now reserved, give her a new one
    if (targetIds.has(p.id)) {
       // Simple strategy: give them a very high ID for now
       p.id = p.id + 100;
       p.block = p.block.replace(/id:\s*\d+/, `id: ${p.id}`);
    }
  }
});

// Sort by ID
uniqueBlocks.sort((a, b) => a.id - b.id);

const newContent = "\n  " + uniqueBlocks.map(u => u.block).join(",\n  ") + "\n";
const finalData = data.replace(arrayRegex, `export const girls = [${newContent}];`);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Final update complete');
