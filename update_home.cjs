const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const s = data.indexOf('[');
const e = data.lastIndexOf(']');
const content = data.substring(s + 1, e);

const items = [];
let brace = 0;
let cur = '';
let quote = null;

for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if ((c === '\"' || c === '\'') && (i === 0 || content[i - 1] !== '\\')) {
        if (!quote) quote = c;
        else if (quote === c) quote = null;
    }
    cur += c;
    if (!quote) {
        if (c === '{') brace++;
        if (c === '}') {
            brace--;
            if (brace === 0) {
                let block = cur.trim();
                while (block.startsWith(',')) block = block.substring(1).trim();
                if (block.startsWith('{')) items.push(block);
                cur = '';
            }
        }
    }
}

const parse = (b) => {
    const cn = (b.match(/cn:\s*"([^"]+)"/) || [])[1] || "";
    const loc = (b.match(/location:\s*"([^"]+)"/) || [])[1] || "";
    return { name: cn, loc: loc.trim(), block: b };
};

const girls = items.map(parse);

// Hide Chestnut (栗子)
const remainingGirls = girls.filter(g => g.name !== "栗子");

// Home order: Momo, BP, 优优, 小绵羊
const homePriorityNames = ["Momo", "BP", "优优", "小绵羊"];

// Create the final global list. 
// Note: This global list controls the home page "Latest" (the first few) 
// and the collection page order.
const homePriorityList = [];
homePriorityNames.forEach(name => {
    const found = remainingGirls.find(g => g.name === name);
    if (found) homePriorityList.push(found);
});

remainingGirls.forEach(g => {
    if (!homePriorityList.includes(g)) homePriorityList.push(g);
});

const result = data.substring(0, s + 1) + "\n  " + homePriorityList.map((g, i) => g.block.replace(/id:\s*\d+/, "id: " + (i + 1))).join(",\n  ") + "\n" + data.substring(e);
fs.writeFileSync('src/lib/data.js', result);
console.log('Hidden Chestnut and updated Home priority');
