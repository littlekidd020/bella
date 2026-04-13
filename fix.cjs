const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const targetMappings = {
  "Momo": 1, "优优": 3, "CC": 4, "莱拉": 5, "芭芭拉": 6, "安安": 7,
  "小绵羊": 13, "泰妹": 14, "盲盒": 15, "语橙": 16, "羽西": 17, "思思": 18
};

const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const content = data.substring(arrayStart + 1, arrayEnd);

// More robust split: find root level opening braces after a comma or start
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
  const idMatch = block.match(/id:\s*(\d+)/);
  let id = idMatch ? parseInt(idMatch[1]) : 999;
  return { name, id, block };
});

const priorityNames = Object.keys(targetMappings);
const targetIds = new Set(Object.values(targetMappings));

// Update matches
girls.forEach(obj => {
  if (targetMappings[obj.name]) {
    obj.id = targetMappings[obj.name];
    obj.block = obj.block.replace(/id:\s*\d+/, `id: ${obj.id}`);
  }
});

// Resolve non-conflicting IDs
girls.forEach(obj => {
  if (!priorityNames.includes(obj.name) && targetIds.has(obj.id)) {
     obj.id = obj.id + 100;
     obj.block = obj.block.replace(/id:\s*\d+/, `id: ${obj.id}`);
  }
});

girls.sort((a, b) => a.id - b.id);

const newContent = "\n  " + girls.map(g => g.block).join(",\n  ") + "\n";
const finalData = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Fixed');
