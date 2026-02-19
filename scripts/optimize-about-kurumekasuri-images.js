/**
 * One-off script: resize and compress PNGs in public/images/about-kurumekasuri/
 * Max longer edge 1600px, PNG compression level 9. Overwrites files in place.
 * Run: node scripts/optimize-about-kurumekasuri-images.js
 */

const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images', 'about-kurumekasuri')
const MAX_EDGE = 1600
const PNG_COMPRESSION = 9

const FILES = [
  'kasuri-texture-closeup.png',
  'inoue-den-discovery.png',
  'process-kukuri-tying.png',
  'process-aizome-dyeing.png',
  'process-ori-weaving.png',
  'process-shiage-drying.png',
  'kasuri-no-two-alike.png',
  'indigo-hands.png',
  'modern-kasuri-colours.png',
]

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

async function main() {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error('Directory not found:', IMAGE_DIR)
    process.exit(1)
  }

  for (const file of FILES) {
    const inputPath = path.join(IMAGE_DIR, file)
    if (!fs.existsSync(inputPath)) {
      console.log(`Skip (missing): ${file}`)
      continue
    }

    const beforeBytes = fs.statSync(inputPath).size
    const buffer = await sharp(inputPath)
      .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: PNG_COMPRESSION })
      .toBuffer()
    fs.writeFileSync(inputPath, buffer)
    const afterBytes = buffer.length
    const saved = beforeBytes - afterBytes
    const pct = beforeBytes > 0 ? ((saved / beforeBytes) * 100).toFixed(0) : 0
    console.log(
      `${file}: ${formatBytes(beforeBytes)} → ${formatBytes(afterBytes)} (${saved > 0 ? '-' : ''}${formatBytes(Math.abs(saved))}, ${pct}%)`
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
