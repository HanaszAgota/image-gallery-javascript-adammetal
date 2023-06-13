const fs = require("fs/promises");
const path = require("path");

const IMAGES_FS_PATH = path.join(
  __dirname,
  "..",
  "..",
  "data",
  "database",
  "images.json"
);


function writeImagesToFs(images) {
  return fs.writeFile(IMAGES_FS_PATH, JSON.stringify(images, null, 2));
}

async function readImages() {
  const current = await fs.readFile(IMAGES_FS_PATH, { encoding: "utf-8" });
  const images = JSON.parse(current);
  return images;
}

async function addImage(image) {
  const images = await readImages();

  image.createdAt = new Date().toISOString();

  images.push(image);

  await writeImagesToFs(images);
  return image;
}

module.exports = {
  readImages,
  addImage
};
