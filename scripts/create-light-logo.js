const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/logos/Logo_text.png');
const outputPath = path.join(__dirname, '../public/logos/Logo_text_light.png');

// Luminance threshold: pixels below this are treated as background (made transparent)
// Pixels at or above are treated as text (made white)
const LUMINANCE_THRESHOLD = 30;

sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    const newData = Buffer.alloc(data.length);

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = channels === 4 ? data[i + 3] : 255;

      // Luminance (perceived brightness)
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      // If pixel is dark (background) or nearly transparent -> make fully transparent
      if (luminance < LUMINANCE_THRESHOLD || a < 30) {
        newData[i] = 0;
        newData[i + 1] = 0;
        newData[i + 2] = 0;
        newData[i + 3] = 0;
      } else {
        // Text area -> white with full opacity
        newData[i] = 255;
        newData[i + 1] = 255;
        newData[i + 2] = 255;
        newData[i + 3] = 255;
      }
    }

    return sharp(newData, {
      raw: { width, height, channels: 4 },
    })
      .png()
      .toFile(outputPath);
  })
  .then(() => {
    console.log('Logo_text_light.png created successfully.');
  })
  .catch((err) => {
    console.error('Error creating light logo:', err);
    process.exit(1);
  });
