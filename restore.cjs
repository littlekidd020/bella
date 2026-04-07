const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

// Use simple split on "  }," to separate blocks
// This is safer than a brace counter for a file with 100+ copies of the same blocks
const blocks = data.split('  },').map(b => b.trim());

const girls = [];
const seen = new Set();

blocks.forEach(b => {
    if (!b.includes('name:')) return;
    const m = b.match(/cn:\s*"([^"]+)"/);
    if (m) {
        const name = m[1];
        if (!seen.has(name)) {
            seen.add(name);
            // Reconstruct the block enough to be valid
            let fullBlock = b;
            if (!fullBlock.endsWith('}')) fullBlock += '\n  }';
            if (!fullBlock.startsWith('{')) {
                const sIdx = fullBlock.indexOf('{');
                if (sIdx !== -1) fullBlock = fullBlock.substring(sIdx);
            }
            
            const lMatch = fullBlock.match(/location:\s*"([^"]+)"/);
            girls.push({ name, loc: lMatch ? lMatch[1].trim() : "", block: fullBlock });
        }
    }
});

const cbdOrder = ["Momo", "BP", "优优", "CC", "莱拉", "芭芭拉", "安安"];
const centralOrder = ["小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];

const cbd = girls.filter(g => g.loc.toUpperCase().includes("CBD"));
const central = girls.filter(g => g.loc.toUpperCase().includes("CENTRAL") || g.loc === "中区");
const others = girls.filter(g => !cbd.includes(g) && !central.includes(g));

const sort = (arr, list) => {
    let s = [];
    list.forEach(n => { const f = arr.find(g=>g.name===n); if(f) s.push(f); });
    arr.forEach(g => { if(!s.includes(g)) s.push(g); });
    return s;
};

const final = [...sort(cbd, cbdOrder), ...sort(central, centralOrder), ...others];
const res = "export const girls = [\n  " + final.map((g,i)=>g.block.replace(/id:\s*\d+/, "id: "+(i+1))).join(",\n  ") + "\n];\n\nexport default girls;\n";
fs.writeFileSync('src/lib/data.js', res);
console.log('Unique Girls Count:', final.length);
