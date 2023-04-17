const initSwiperInstructors = (swiper) => {
  if (swiper) {
    new Swiper('#swiper-instructors', {
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.instructors__button-left',
        prevEl: '.instructors__button-right',
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
      },

      slidesPerView: 4,
      spaceBetween: 40,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        954: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0,
        },

        1250: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        }
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
};

export { initSwiperInstructors };
