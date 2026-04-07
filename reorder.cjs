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

const cbdOrder = ["Momo", "BP", "优优", "CC", "莱拉", "芭芭拉", "安安"];
const centralOrder = ["小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];

const cbd = girls.filter(g => g.loc.toUpperCase().includes("CBD"));
const central = girls.filter(g => g.loc.toUpperCase().includes("CENTRAL") || g.loc === "中区");
const others = girls.filter(g => !cbd.includes(g) && !central.includes(g));

const sort = (arr, list) => {
    let sorted = [];
    list.forEach(n => {
        const found = arr.find(g => g.name === n);
        if (found) sorted.push(found);
    });
    arr.forEach(g => {
        if (!sorted.includes(g)) sorted.push(g);
    });
    return sorted;
};

const final = [...sort(cbd, cbdOrder), ...sort(central, centralOrder), ...others];

const result = data.substring(0, s + 1) + "\n  " + final.map((g, i) => g.block.replace(/id:\s*\d+/, "id: " + (i + 1))).join(",\n  ") + "\n" + data.substring(e);
fs.writeFileSync('src/lib/data.js', result);
