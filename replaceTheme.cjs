const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  // Backgrounds
  { search: /#0D0208/g, replace: '#FAF5F7' }, // Main surface
  { search: /#1A0A12/g, replace: '#FFFFFF' }, // Elevated surface
  { search: /rgba\(26,\s*10,\s*18,/g, replace: 'rgba(255, 255, 255,' }, // Glass surfaces

  // Text
  { search: /#F5E6EC/g, replace: '#2D1822' }, // Main text
  { search: /rgba\(245,\s*230,\s*236,/g, replace: 'rgba(45, 24, 34,' }, // Muted text
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.search, r.replace);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
