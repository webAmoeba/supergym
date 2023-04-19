const initSwiperReviews = (swiper) => {
  if (swiper) {
    new Swiper('#swiper-reviews', {
      direction: 'horizontal',
      loop: false,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__button-left',
        prevEl: '.reviews__button-right',
      },

      initialSlide: 0,

      slidesPerView: 1,

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
};

export {initSwiperReviews};
