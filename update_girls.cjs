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

const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const content = data.substring(arrayStart + 1, arrayEnd);

// Split blocks by "  }," at end of block
const blocks = content.split(/  \},\n  \{/g).map((b, i, arr) => {
  let s = b.trim();
  if (i === 0) s = s + '\n  }';
  else if (i === arr.length - 1) s = '{' + s;
  else s = '{' + s + '\n  }';
  return s;
});

const objects = blocks.map(block => {
  const cnMatch = block.match(/cn:\s*"([^"]+)"/);
  const name = cnMatch ? cnMatch[1] : "";
  const idMatch = block.match(/id:\s*(\d+)/);
  let id = idMatch ? parseInt(idMatch[1]) : 0;
  return { name, id, block };
});

const targetNames = Object.keys(targetMappings);
const targetIds = new Set(Object.values(targetMappings));

// Update matches
objects.forEach(obj => {
  if (targetMappings[obj.name]) {
    obj.id = targetMappings[obj.name];
    obj.block = obj.block.replace(/id:\s*\d+/, `id: ${obj.id}`);
  }
});

// Resolve collisions for non-targets
objects.forEach(obj => {
  if (!targetNames.includes(obj.name) && targetIds.has(obj.id)) {
    let newId = Math.max(...objects.map(o => o.id)) + 1;
    obj.id = newId;
    obj.block = obj.block.replace(/id:\s*\d+/, `id: ${newId}`);
  }
});

// Remove duplicates by name
const unique = [];
const seen = new Set();
objects.forEach(obj => {
  if (!seen.has(obj.name)) {
    unique.push(obj);
    seen.add(obj.name);
  }
});

// Sort by ID
unique.sort((a, b) => a.id - b.id);

const newContent = "\n  " + unique.map(o => o.block).join(",\n  ") + "\n";
const finalData = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Success');
