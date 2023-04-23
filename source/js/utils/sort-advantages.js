const items = document.querySelectorAll('.advantages__item');
const central = document.querySelector('.advantages__item--center');
const list = document.querySelector('.advantages__list');

items.forEach((elem) => {
  if (!elem.classList.contains('advantages__item--center')) {
    elem.classList.add('advantages__item--usual');
  }
});

const usuals = document.querySelectorAll('.advantages__item--usual');

const sortedElements = [];

usuals.forEach((element, index) => {
  if (index < 2) {
    sortedElements.push(element);
  }
});

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
