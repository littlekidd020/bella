const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

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

const girls = items.map(block => {
    const cnMatch = block.match(/cn:\s*"([^"]+)"/);
    const locMatch = block.match(/location:\s*"([^"]+)"/);
    return { 
        name: cnMatch ? cnMatch[1] : "", 
        loc: locMatch ? locMatch[1].trim() : "", 
        block 
    };
});

const targetCentralOrder = ["小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];
const cbd = girls.filter(g => g.loc.toUpperCase().includes("CBD"));
const central = girls.filter(g => g.loc.toUpperCase().includes("CENTRAL") || g.loc === "中区");
const others = girls.filter(g => !g.loc.toUpperCase().includes("CBD") && !g.loc.toUpperCase().includes("CENTRAL") && g.loc !== "中区");

const sortedCentral = [];
targetCentralOrder.forEach(name => {
    const found = central.find(g => g.name === name);
    if (found) sortedCentral.push(found);
});
central.forEach(g => {
    if (!sortedCentral.includes(g)) sortedCentral.push(g);
});

const sortedCbd = [];
const targetCbdOrder = ["Momo", "优优", "CC", "莱拉", "芭芭拉", "安安"];
targetCbdOrder.forEach(name => {
    const found = cbd.find(g => g.name === name);
    if (found) sortedCbd.push(found);
});
cbd.forEach(g => {
    if (!sortedCbd.includes(g)) sortedCbd.push(g);
});

const final = [...sortedCbd, ...sortedCentral, ...others];
const reCalculated = final.map((g, idx) => {
    return g.block.replace(/id:\s*\d+/, "id: " + (idx + 1));
});

const newContent = "\n  " + reCalculated.join(",\n  ") + "\n";
const finalResult = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);
fs.writeFileSync('src/lib/data.js', finalResult);
process.exit(0);
