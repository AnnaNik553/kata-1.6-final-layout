import Swiper, { Pagination, Keyboard, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.css';

// свайпер для брендов
let brandInit = false;
let brandSwiper = null;

function swiperBrand() {

  if (window.innerWidth <= 767) {
    if (!brandInit) {

      brandInit = true;

      brandSwiper = new Swiper(".brands__swiper", {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        loop: true,
        slidesPerView: "auto",
      });

    }
  } else if (brandInit) {
    brandSwiper.destroy();
    brandInit = false;
  }
}
swiperBrand();
window.addEventListener("resize", swiperBrand);

// свайпер для видов техники

let techInit = false;
let techSwiper = null;

function swiperTech() {

  if (window.innerWidth <= 767) {
    if (!techInit) {

      techInit = true;

      techSwiper = new Swiper(".type-tech__swiper", {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        loop: true,
        slidesPerView: "auto",
      });

    }
  } else if (techInit) {
    techSwiper.destroy();
    techInit = false;
  }
}
swiperTech();
window.addEventListener("resize", swiperTech);

// свайпер для цен

let priceInit = false;
let priceSwiper = null;

function swiperPrice() {

  if (window.innerWidth <= 767) {
    if (!priceInit) {

      priceInit = true;

      priceSwiper = new Swiper(".price__swiper", {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        mousewheel: {
          sensitivity: 1
        },
        loop: true,
        slidesPerView: "auto",
      });

    }
  } else if (priceInit) {
    priceSwiper.destroy();
    priceInit = false;
  }
}
swiperPrice();
window.addEventListener("resize", swiperPrice);


// раскрывается блок Brands

let brandsBtn = document.querySelector('.brands__show-btn')
brandsBtn.addEventListener("click", function (e) {
  // раскрывается блок
  document.querySelector('.brands__swiper-wrapper').classList.toggle('brands__swiper-wrapper--height');

  // меняется текст в кнопке
  let btnText = document.querySelector('.brands__show-btn>span')
  if (btnText.classList.contains('show-btn__text')) {
    btnText.classList.remove('show-btn__text');
    btnText.classList.add('show-btn__text--clicked');
  } else if (btnText.classList.contains('show-btn__text--clicked')) {
    btnText.classList.remove('show-btn__text--clicked');
    btnText.classList.add('show-btn__text');
  }

  // анимация стрелок кнопки
  e.currentTarget.classList.toggle('show-btn--rotate');
})

// раскрывается блок Type-tech

let techBtn = document.querySelector('.type-tech__show-btn')
techBtn.addEventListener("click", function (e) {
  // раскрывается блок
  document.querySelector('.type-tech__swiper-wrapper').classList.toggle('type-tech__swiper-wrapper--height');

  // меняется текст в кнопке
  let btnText = document.querySelector('.type-tech__show-btn>span')
  if (btnText.classList.contains('show-btn__text')) {
    btnText.classList.remove('show-btn__text');
    btnText.classList.add('show-btn__text--clicked');
  } else if (btnText.classList.contains('show-btn__text--clicked')) {
    btnText.classList.remove('show-btn__text--clicked');
    btnText.classList.add('show-btn__text');
  }

  // анимация стрелок кнопки
  e.currentTarget.classList.toggle('show-btn--rotate');
})
