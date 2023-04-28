const items = document.querySelectorAll('.instructors__list .swiper-slide');

if (items) {
  items.forEach((elem, index) => {
    if (index < 4) {
      elem.setAttribute('tabindex', '0');
    }
  });
}
