const items = document.querySelectorAll('.advantages__item');
const central = document.querySelector('.advantages__item--center');
const list = document.querySelector('.advantages__list');
const usuals = [];

if (items && central && list) {
  items.forEach((elem) => {
    if (!elem.classList.contains('advantages__item--center')) {
      elem.classList.add('advantages__item--usual');
      usuals.push(elem);
    }
  });

  const sortedElements = [];

  usuals.forEach((element, index) => {
    if (index < 2) {
      sortedElements.push(element);
    }
  });

  // центральный элемент добавляется в дерево третьим по счету. нужно для положения в сетке
  sortedElements.push(central);

  usuals.forEach((element, index) => {
    if (index >= 2) {
      sortedElements.push(element);
    }
  });

  sortedElements.forEach((element) => {
    element.replaceWith(element);
  });

  sortedElements.forEach((element) => {
    list.appendChild(element);
  });
}
