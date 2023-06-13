import { UploadForm } from "./src/upload/form";
import { createEl } from "./src/utils/createEl";

import './index.css';

const app = document.querySelector('#app');


/**
 * <div id="app">
 * <nav>
 * </nav>
 * <section>
 *  <div><form...</div>
 *  <div><form...</div>
 * </section>
 * </div>
 */

function main() {
  const nav = createEl('nav');
  const mainSection = createEl('section');
  const formBox1 = createEl('div', { className: 'form' });
  
  // Instantiation (Peldanyositas)
  const form1 = new UploadForm('form1', '/api/image', 'POST');

  form1.render(formBox1);

  mainSection.append(formBox1);
  app.append(nav, mainSection);
}

window.onload = main;

