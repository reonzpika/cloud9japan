const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/logos/Logo_text.png');
const outputPath = path.join(__dirname, '../public/logos/Logo_text.png');

sharp(inputPath)
  .trim({ threshold: 15 })
  .toFile(outputPath + '.tmp')
  .then(() => {
    const fs = require('fs');
    fs.renameSync(outputPath + '.tmp', outputPath);
    console.log('Logo_text.png cropped successfully.');
  })
  .catch((err) => {
    console.error('Error cropping image:', err);
    process.exit(1);
  });
