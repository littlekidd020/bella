const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const s = data.indexOf('[');
const e = data.lastIndexOf(']');
const content = data.substring(s+1, e);

const items = [];
let brace = 0;
let cur = '';
let quote = null;

for(let i=0; i<content.length; i++){
    const c = content[i];
    if ((c==='\"' || c==='\'') && content[i-1]!=='\\'){
        if(!quote) quote = c;
        else if(quote === c) quote = null;
    }
    cur += c;
    if(!quote){
        if(c==='{') brace++;
        if(c==='}'){
            brace--;
            if(brace===0){
                let b = cur.trim();
                while(b.startsWith(',')) b = b.substring(1).trim();
                if(b.startsWith('{')){
                    const m = b.match(/cn:\s*"([^"]+)"/);
                    const l = b.match(/location:\s*"([^"]+)"/);
                    if(m) items.push({name: m[1], loc: l?l[1].trim():"", block: b});
                }
                cur = '';
            }
        }
    }
}

const cbdOrder = ["Momo", "BP", "优优", "CC", "莱拉", "芭芭拉", "安安"];
const centralOrder = ["小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];

const cbd = items.filter(g => g.loc.toUpperCase().includes("CBD"));
const central = items.filter(g => g.loc.toUpperCase().includes("CENTRAL") || g.loc === "中区");
const others = items.filter(g => !cbd.includes(g) && !central.includes(g));

const sort = (arr, list) => {
    let s = [];
    list.forEach(n => { const f = arr.find(g=>g.name===n); if(f) s.push(f); });
    arr.forEach(g => { if(!s.includes(g)) s.push(g); });
    return s;
};

const final = [...sort(cbd, cbdOrder), ...sort(central, centralOrder), ...others];
const res = "export const girls = [\n  " + final.map((g,i)=>g.block.replace(/id:\s*\d+/, "id: "+(i+1))).join(",\n  ") + "\n];\n\nexport default girls;\n";
fs.writeFileSync('src/lib/data.js', res);
