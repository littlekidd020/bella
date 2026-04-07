const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

const s = data.indexOf('[');
const e = data.lastIndexOf(']');
const content = data.substring(s+1, e);

const names = [];
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
                const m = cur.match(/cn:\s*"([^"]+)"/);
                if(m) names.push(m[1]);
                cur = '';
            }
        }
    }
}
console.log('Total Count:', names.length);
console.log('Duplicates:', names.length - new Set(names).size);
console.log('First 20 names:', names.slice(0, 20).join(', '));
