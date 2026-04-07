const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const targetMappings = {
  "小绵羊": 13,
  "泰妹": 14,
  "盲盒": 15,
  "语橙": 16,
  "羽西": 17,
  "思思": 18
};

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
      braceCount = Math.max(0, braceCount - 1);
      if (braceCount === 0) {
        items.push(current.trim().replace(/^,/, '').trim());
        current = '';
      }
    }
  }
}

// Map everything to objects
const processed = items.map(block => {
  const cnMatch = block.match(/cn:\s*"([^"]+)"/);
  const name = cnMatch ? cnMatch[1] : "";
  const idMatch = block.match(/id:\s*(\d+)/);
  let id = idMatch ? parseInt(idMatch[1]) : 0;
  return { name, id, block };
});

// Update the targets
processed.forEach(proj => {
  if (targetMappings[proj.name]) {
    proj.id = targetMappings[proj.name];
    proj.block = proj.block.replace(/id:\s*\d+/, `id: ${proj.id}`);
  }
});

// Identify any non-target girls currently having the target IDs
const targetIds = new Set(Object.values(targetMappings));
processed.forEach(proj => {
  if (!targetMappings[proj.name] && targetIds.has(proj.id)) {
     // Shift non-target IDs above 100 to avoid conflicts
     proj.id = proj.id + 100;
     proj.block = proj.block.replace(/id:\s*\d+/, `id: ${proj.id}`);
  }
});

// Remove potential duplicate names created by previous failed runs
const uniqueProjects = [];
const seen = new Set();
processed.forEach(p => {
  if (!seen.has(p.name)) {
    uniqueProjects.push(p);
    seen.add(p.name);
  }
});

uniqueProjects.sort((a, b) => a.id - b.id);

const newContent = "\n  " + uniqueProjects.map(u => u.block).join(",\n  ") + "\n";
const finalData = data.replace(arrayRegex, `export const girls = [${newContent}];`);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Fixed IDs');
