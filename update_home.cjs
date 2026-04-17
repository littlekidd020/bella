const fs = require('fs');
const path = require('path');

const filePath = 'src/lib/data.js';
const data = fs.readFileSync(filePath, 'utf8');

// Use a more robust split logic to extract objects from the girls array
const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const content = data.substring(arrayStart + 1, arrayEnd);

const items = [];
let braceCount = 0;
let current = '';
let inString = false;
let quoteChar = '';

for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if ((char === '"' || char === "'") && (i === 0 || content[i-1] !== '\\')) {
        if (!inString) { inString = true; quoteChar = char; }
        else if (char === quoteChar) inString = false;
    }
    current += char;
    if (!inString) {
        if (char === '{') braceCount++;
        if (char === '}') {
            braceCount--;
            if (braceCount === 0) {
                let s = current.trim();
                while (s.startsWith(',')) s = s.substring(1).trim();
                if (s.startsWith('{')) items.push(s);
                current = '';
            }
        }
    }
}

// Parse metadata/ids
const parsedGirls = items.map(block => {
    const idMatch = block.match(/id:\s*(\d+)/);
    const cnMatch = block.match(/cn:\s*"([^"]+)"/);
    const statusMatch = block.match(/status:\s*"([^"]+)"/);
    return {
        id: idMatch ? parseInt(idMatch[1]) : 0,
        cn: cnMatch ? cnMatch[1] : "",
        status: statusMatch ? statusMatch[1] : "",
        block
    };
});

// Filter out deleted/hidden or specific girls if needed
const filtered = parsedGirls.filter(g => g.cn !== "栗子" && g.status !== "hidden" && g.status !== "deleted");

// Priority names
const homePriorityNames = ["晴宝", "Momo", "小绵羊"];

// Create final list
const priorityList = [];
homePriorityNames.forEach(name => {
    const found = filtered.find(g => g.cn === name || g.cn === "小绵羊" && name === "小绵羊");
    // Handle "小绵羊" mapping if needed (sometimes it's "Lamb" in en, check cn)
    if (found) priorityList.push(found);
});

const others = filtered.filter(g => !priorityList.includes(g));
others.sort((a, b) => b.id - a.id);

const finalOrder = [...priorityList, ...others];

// Re-index IDs so they are sequential 1, 2, 3... based on the new order
const finalGirls = finalOrder.map((g, index) => {
    return g.block.replace(/id:\s*\d+/, "id: " + (index + 1));
});

const newContent = "\n  " + finalGirls.join(",\n  ") + "\n";
const result = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);

fs.writeFileSync(filePath, result);
console.log(`Successfully updated Home: ${filtered.length} girls sorted by latest first.`);
