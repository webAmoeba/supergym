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
        prevEl: '.reviews__button-left',
        nextEl: '.reviews__button-right',
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
