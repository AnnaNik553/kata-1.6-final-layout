// Блок About. раскрывается блок About

let aboutBtn = document.querySelector('.about__show-btn')
aboutBtn.addEventListener('click', function (e) {
  // раскрывается блок
  document
    .querySelector('.about__limiter')
    .classList.toggle('about__limiter--height')

  // меняется текст в кнопке
  let btnText = document.querySelector('.about__show-btn>span')
  if (btnText.classList.contains('about__show-text')) {
    btnText.classList.remove('about__show-text')
    btnText.classList.add('about__show-text--clicked')
  } else if (btnText.classList.contains('about__show-text--clicked')) {
    btnText.classList.remove('about__show-text--clicked')
    btnText.classList.add('about__show-text')
  }

  // анимация стрелок кнопки
  e.currentTarget.classList.toggle('show-btn--rotate')
})

// раскрывается блок Brands

let brandsBtn = document.querySelector('.brands__show-btn')
brandsBtn.addEventListener('click', function (e) {
  // раскрывается блок
  document
    .querySelector('.brands__swiper-wrapper')
    .classList.toggle('brands__swiper-wrapper--height')

  // меняется текст в кнопке
  let btnText = document.querySelector('.brands__show-btn>span')
  if (btnText.classList.contains('show-btn__text')) {
    btnText.classList.remove('show-btn__text')
    btnText.classList.add('show-btn__text--clicked')
  } else if (btnText.classList.contains('show-btn__text--clicked')) {
    btnText.classList.remove('show-btn__text--clicked')
    btnText.classList.add('show-btn__text')
  }

  // анимация стрелок кнопки
  e.currentTarget.classList.toggle('show-btn--rotate')
})

// раскрывается блок Type-tech

let techBtn = document.querySelector('.type-tech__show-btn')
techBtn.addEventListener('click', function (e) {
  // раскрывается блок
  document
    .querySelector('.type-tech__swiper-wrapper')
    .classList.toggle('type-tech__swiper-wrapper--height')

  // меняется текст в кнопке
  let btnText = document.querySelector('.type-tech__show-btn>span')
  if (btnText.classList.contains('show-btn__text')) {
    btnText.classList.remove('show-btn__text')
    btnText.classList.add('show-btn__text--clicked')
  } else if (btnText.classList.contains('show-btn__text--clicked')) {
    btnText.classList.remove('show-btn__text--clicked')
    btnText.classList.add('show-btn__text')
  }

  // анимация стрелок кнопки
  e.currentTarget.classList.toggle('show-btn--rotate')
})
