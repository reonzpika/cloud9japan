/**
 * Crop the hero image: remove a little from top and bottom (3% each, keep middle 94%).
 * Overwrites the file in place.
 * Run: node scripts/crop-hero-image.js
 */

const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const HERO_IMAGE_PATH = path.join(__dirname, '..', 'public', 'images', 'homepage', 'hero-image.png')

async function main() {
  if (!fs.existsSync(HERO_IMAGE_PATH)) {
    console.error('Hero image not found:', HERO_IMAGE_PATH)
    process.exit(1)
  }

  const image = sharp(HERO_IMAGE_PATH)
  const { width, height } = await image.metadata()

  const CROP_FRACTION = 0.03 // 3% from top, 3% from bottom
  const cropTop = Math.round(height * CROP_FRACTION)
  const cropBottom = Math.round(height * CROP_FRACTION)
  const newHeight = height - cropTop - cropBottom

  if (newHeight <= 0) {
    console.error('Image too short to crop')
    process.exit(1)
  }

  const tempPath = HERO_IMAGE_PATH + '.cropped.tmp'
  await image
    .extract({ left: 0, top: cropTop, width, height: newHeight })
    .toFile(tempPath)
  fs.renameSync(tempPath, HERO_IMAGE_PATH)

  console.log(`Cropped hero image: removed ${cropTop}px top, ${cropBottom}px bottom. New height: ${newHeight}px (was ${height}px).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
