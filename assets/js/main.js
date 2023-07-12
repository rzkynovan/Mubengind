var mySwiper = new Swiper('.event-slide', {
    slidesPerView: '1.5',
    centeredSlides: true,
    effect: "coverflow",
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-event-next',
      prevEl: '.swiper-event-prev',
    },
    on: {
        slideChange: function () {
        this.slides.css('width', '');
        this.clickedSlide.css('width', '200%');
        this.update();
      },
    },
    // on: {
    //     sliderMove: function () {
    //         this.slides.css('width', '');
    //         this.clickedSlide.css('width', '80%');
    //         this.update();
    //     }
    // }
  });
  

  var mySwiper = new Swiper('.bundle-slide', {
    slidesPerView: '1.5',
    // centeredSlides: true,
    // effect: "coverflow",
    spaceBetween: 24,
    navigation: {
      nextEl: '.bundle-toggle .swiper-button-next',
      prevEl: '.bundle-toggle .swiper-button-prev',
    },
  });
  
  var mySwiper = new Swiper('.testi-slide', {
    slidesPerView: '2.5',
    // centeredSlides: true,
    // effect: "coverflow",
    spaceBetween: 24,
  });