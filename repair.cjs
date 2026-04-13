const fs = require('fs');
const data = fs.readFileSync('src/lib/data.js', 'utf8');

// The file is corrupted with an unterminated string and duplicated blocks.
// I'll rebuild it by extracting all complete object blocks.

const arrayStart = data.indexOf('[');
const arrayEnd = data.lastIndexOf(']');
const content = data.substring(arrayStart + 1, arrayEnd);

// A more careful split: we look for complete { ... } structures
const items = [];
let braceCount = 0;
let current = '';
let inString = false;
let quoteChar = '';

for (let i = 0; i < content.length; i++) {
  const char = content[i];
  
  // Handle string boundaries
  if ((char === '"' || char === "'") && content[i-1] !== '\\') {
    if (!inString) {
      inString = true;
      quoteChar = char;
    } else if (char === quoteChar) {
      inString = false;
    }
  }

  current += char;
  
  if (!inString) {
    if (char === '{') braceCount++;
    if (char === '}') {
      braceCount = Math.max(0, braceCount - 1);
      if (braceCount === 0) {
        // We found a complete block. Verify if it's actually a valid girl object
        const block = current.trim().replace(/^,/, '').trim();
        if (block.includes('id:') && block.includes('name:')) {
           items.push(block);
        }
        current = '';
      }
    }
  }
}

// Map them to names to remove duplicates and restore order
const girls = items.map(block => {
  const cnMatch = block.match(/cn:\s*"([^"]+)"/);
  const name = cnMatch ? cnMatch[1] : `ID_${(block.match(/id:\s*(\d+)/)||[])[1]}`;
  const idMatch = block.match(/id:\s*(\d+)/);
  const id = idMatch ? parseInt(idMatch[1]) : 999;
  return { name, id, block };
});

// Priority reordering based on previous requests
const priorityNames = ["Momo", "优优", "CC", "莱拉", "芭芭拉", "安安", "小绵羊", "泰妹", "盲盒", "语橙", "羽西", "思思"];
const idMappings = {
  "Momo": 1, "优优": 3, "CC": 4, "莱拉": 5, "芭芭拉": 6, "安安": 7,
  "小绵羊": 13, "泰妹": 14, "盲盒": 15, "语橙": 16, "羽西": 17, "思思": 18
};

// Deduplicate
const unique = [];
const seen = new Set();
girls.forEach(g => {
  if (!seen.has(g.name)) {
    unique.push(g);
    seen.add(g.name);
  }
});

// Apply clean IDs and sort
unique.forEach(g => {
  if (idMappings[g.name]) {
    g.id = idMappings[g.name];
    g.block = g.block.replace(/id:\s*\d+/, `id: ${g.id}`);
    
    // One specific fix for CC which was likely truncated in the screenshot error
    if (g.name === "CC" && g.block.includes('eat(+')) {
       // Repair truncated CC services
       g.block = g.block.replace(/Extra: Cum\\u00A0in\\u00A0face\(\+\$50\) Cum\\u00A0in\\u00A0mouth&eat\(\+[\s\S]*$/, 
         'Extra: Cum\\u00A0in\\u00A0face(+$50) Cum\\u00A0in\\u00A0mouth&eat(+$100) second\\u00A0shot(+$100)"\n      ],\n      cn: [\n        "无套口", "舔蛋", "抚摸蛋", "指划蛋", "舔乳头", "情趣制服", "黑丝", "共浴", "69", "舌吻", "做1次",\n        "VIP: 鸳鸯浴 舌吻 Kiss 360度无套口 抚摸 皖式服务 胸推 按摩 弹指 全身漫游 深喉 指滑毒龙 海底捞月 情趣内衣 丝袜 丝袜足交",\n        "额外：口爆吞精(+$100) 颜射(+$50) 情景角色扮演/SM(+$150) 加一次(+$100)"\n      ]\n    },\n    gallery: [\n      "/images/girls/cc/2.jpg",\n      "/images/girls/cc/3.jpg",\n      "/images/girls/cc/4.jpg",\n      "/images/girls/cc/5.jpg"\n    ]\n  }');
    }
  }
});

unique.sort((a, b) => a.id - b.id);

const newContent = "\n  " + unique.map(u => u.block).join(",\n  ") + "\n";
const finalData = data.substring(0, arrayStart + 1) + newContent + data.substring(arrayEnd);
fs.writeFileSync('src/lib/data.js', finalData);
console.log('Repaired successfully');
