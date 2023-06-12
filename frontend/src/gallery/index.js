import './index.css';

const root = document.querySelector('#app');

export function initGallery() {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  gallery.innerText = 'This is the gallery skeleton';
  root.append(gallery);
}
