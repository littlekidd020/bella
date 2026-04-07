const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const targetNames = ["Momo", "BP", "优优", "CC", "莱拉", "芭芭拉", "安安"];

// A really simple way is to match every { ... } in the array
// Since the file is fairly consistently formatted
const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const content = data.substring(arrayStart + 1, arrayEnd);

// This splitting is better: split by the transition between objects
const items = content.split(/},\s*\n  {/g).map((item, index, arr) => {
  let str = item.trim();
  if (index === 0) {
    // first item
    if (!str.endsWith('}')) str += '}';
  } else if (index === arr.length - 1) {
    // last item
    if (!str.startsWith('{')) str = '{' + str;
  } else {
    // middle items
    if (!str.startsWith('{')) str = '{' + str;
    if (!str.endsWith('}')) str += '}';
  }
  
  // Try to find the name
  const nameMatch = str.match(/cn:\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : "";
  return { name, str };
});

const sorted = [];
targetNames.forEach(name => {
  const found = items.find(i => i.name === name);
  if (found) sorted.push(found);
});

items.forEach(item => {
  if (!sorted.includes(item)) sorted.push(item);
});

const newContent = sorted.map(i => i.str).join(',\n  ');
const finalData = data.substring(0, arrayStart + 1) + "\n  " + newContent + "\n" + data.substring(arrayEnd);
fs.writeFileSync('src/lib/data.js', finalData);
