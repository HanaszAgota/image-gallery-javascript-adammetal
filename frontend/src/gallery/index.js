import {createEl} from '../utils/ceateEl';

import { createEl } from '../utils/createEl';
import './index.css';

const root = document.querySelector('#app');

async function getImages() {
  const response = await fetch('http://localhost:8000/api/images')
  const data = await response.json()
  return data
}

function createImageEl(url) {
  const image = createEl('img')
}

export async function initGallery() {
  const gallery = createEl('div', {});

  root.append(gallery);

  const imageData = await getImages()
  console.log(imageData)

  imageData.forEach(imageData => {
    const image = createImageEl //video
  })
}
