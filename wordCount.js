import fs from 'fs';

function countWords(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const words = data.trim().split(/\s+/);
    const wordCount = words.length;
    console.log('Total word count:', wordCount);
  });
}

countWords('data.txt');
