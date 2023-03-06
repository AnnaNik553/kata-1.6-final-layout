import Swiper, { Pagination, Keyboard, Mousewheel } from 'swiper'
import 'swiper/swiper-bundle.css'

// свайпер для брендов
let brandInit = false
let brandSwiper = null

function swiperBrand() {
  if (window.innerWidth <= 767) {
    if (!brandInit) {
      brandInit = true

      brandSwiper = new Swiper('.brands__swiper', {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
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
        slidesPerView: 'auto'
      })
    }
  } else if (brandInit) {
    brandSwiper.destroy()
    brandInit = false
  }
}
swiperBrand()
window.addEventListener('resize', swiperBrand)

// свайпер для видов техники

let techInit = false
let techSwiper = null

function swiperTech() {
  if (window.innerWidth <= 767) {
    if (!techInit) {
      techInit = true

      techSwiper = new Swiper('.type-tech__swiper', {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
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
        slidesPerView: 'auto'
      })
    }
  } else if (techInit) {
    techSwiper.destroy()
    techInit = false
  }
}
swiperTech()
window.addEventListener('resize', swiperTech)

// свайпер для цен

let priceInit = false
let priceSwiper = null

function swiperPrice() {
  if (window.innerWidth <= 767) {
    if (!priceInit) {
      priceInit = true

      priceSwiper = new Swiper('.price__swiper', {
        modules: [Pagination, Keyboard, Mousewheel],
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
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
        slidesPerView: 'auto'
      })
    }
  } else if (priceInit) {
    priceSwiper.destroy()
    priceInit = false
  }
}
swiperPrice()
window.addEventListener('resize', swiperPrice)
