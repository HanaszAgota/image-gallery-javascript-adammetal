const express = require("express");
const { uuid } = require('uuidv4');
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require('cors');
const path = require('path');
const { addImage, readImages } = require("./model/images.model");

const UPLOAD_FS_PATH = path.join(__dirname, '..', 'data', 'uploads');

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(UPLOAD_FS_PATH));

// TODO: Options?
app.use(fileUpload());

app.post("/api/image", async (req, res) => {
  const image = req.files?.image;
  const data = req.body;

  if (!image) {
    return res.status(400).json({ text: "Missing image" });
  }
  
  // TODO: Add model layer
  // 1. Generate id for the image
  const id = uuid();

  // 2. Move the image to data
  const { name } = image;
  const ext = name.split('.').at(-1); // last element
  await image.mv(path.join(UPLOAD_FS_PATH, `${id}.${ext}`));
  
  // 3. Store the image informations in local db (file)
  const saved = await addImage({
    ...data, // spread oerator (copy the object)
    url: `/images/${id}.${ext}`,
    id,
  })

  return res.json(saved);
});

app.get('/api/images', async (req, res) => {
  const images = await readImages();
  return res.json(images);
})

module.exports = app;
