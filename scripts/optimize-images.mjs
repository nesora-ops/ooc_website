import { mkdir, readdir, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "images")

const SKIP = new Set([
  "favicon-16.png",
  "favicon-32.png",
  "favicon-48.png",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (entry.isFile() && /\.png$/i.test(entry.name) && !SKIP.has(entry.name)) files.push(full)
  }
  return files
}

function optionsFor(file) {
  const rel = file.replace(/\\/g, "/")
  if (rel.includes("/brand/")) {
    return { width: 640, quality: 82 }
  }
  return { width: 1400, quality: 72 }
}

const files = await walk(root)
let saved = 0
for (const file of files) {
  const out = file.replace(/\.png$/i, ".webp")
  const { width, quality } = optionsFor(file)
  const input = await stat(file)
  await sharp(file)
    .rotate()
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 4, alphaQuality: 80 })
    .toFile(out)
  const output = await stat(out)
  saved += input.size - output.size
  console.log(
    `${path.relative(root, file)}  ${(input.size / 1024).toFixed(0)}KB -> ${(output.size / 1024).toFixed(0)}KB`
  )
}
console.log(`done. saved ${(saved / 1024 / 1024).toFixed(1)}MB across ${files.length} files`)
