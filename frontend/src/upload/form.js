import { createEl } from "../utils/createEl";

// true module private
function createInputBox(type, name, placeholder) {
  const box = createEl("div");
  const el = createEl(type, {
    name,
    placeholder,
  });

  box.append(el);
  return box;
}

export class UploadForm {

  // Instance Initializer
  constructor(id, action, method, onSubmit) {
    this.id = id;
    this.action = action;
    this.method = method;
    this.onSubmit = onSubmit;
  }

  // Fields
  id = 'upload-form';
  action = '/api/image';
  method = 'POST';

  // not necessary
  onSubmit = () => {};

  // Method (private because of the #)
  // Class private
  #createInputBox(type, name, placeholder) {
    const box = createEl("div");
    const el = createEl("input", {
      type,
      name,
      placeholder,
    });

    box.append(el);
    return box;
  }

  // Method
  // (title, photographer's name, file element)
  render(toEl) {
    // this <--- the actual object

    const formEl = createEl("form", {
      enctype: 'multipart/form-data',
      method: this.method,
      action: this.action,
      id: this.id,
    });

    formEl.addEventListener('submit', this.onSubmit);

    // Title element
    const titleEl = this.#createInputBox("text", "title", "Title of the image");
    formEl.append(titleEl);

    // Name
    const nameEl = this.#createInputBox(
      "text",
      "name",
      "Name of the photographer"
    );
    formEl.append(nameEl);

    // File
    const fileEl = this.#createInputBox(
      'file',
      'image'
    )
    formEl.append(fileEl);

    const submit = createEl('button', {
      type: 'submit',
      innerText: 'Save'
    });
    formEl.append(submit);

    toEl.append(formEl);
  }
}
