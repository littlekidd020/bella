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
// The user previously hid "栗子" (Chestnut) and "BP"
const filtered = parsedGirls.filter(g => g.cn !== "栗子" && g.status !== "hidden" && g.status !== "deleted");

// Sort by ID descending (Latest first)
// This ensures that any new high-ID additions go to the top
filtered.sort((a, b) => b.id - a.id);

// If the user still wants specific girls to be ABSOLUTELY top (even above latest), 
// they can be defined here. But given "newest to top", we'll stick to ID sequence.
// Optionally, move available girls to top of unavailable? 
// No, the user just said newest to top.

// Re-index IDs so they are sequential 1, 2, 3... based on the new order
const finalGirls = filtered.map((g, index) => {
    return g.block.replace(/id:\s*\d+/, "id: " + (index + 1));
});

const newContent = "\n  " + finalGirls.join(",\n  ") + "\n";
const result = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);

fs.writeFileSync(filePath, result);
console.log(`Successfully updated Home: ${filtered.length} girls sorted by latest first.`);
