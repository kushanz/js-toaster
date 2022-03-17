export default class Toaster {
  #toastElement;
  constructor(options) {
    this.#toastElement = document.createElement('div');
    this.#toastElement.classList.add('toast');
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  set position(value) {
    const container =
      document.querySelector(`.toast-container[data-position="${value}"]`) ||
      createContainer(value);
    container.append(this.#toastElement);
  }
  set text(value) {
    this.#toastElement.textContent = value;
  }
}

function createContainer(position) {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  container.dataset.position = position;
  document.body.append(container);
  return container;
}
