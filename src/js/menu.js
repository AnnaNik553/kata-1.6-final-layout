const menuBtn = document.querySelector('.img-button--burger')
const menu = document.querySelector('.site-nav__box')
const closeBtn = document.querySelector('.site-nav__img-button--burger-close')
let menuActiveElement = null

// открываем блок с главным меню
menuBtn.addEventListener('click', function () {
  menuActiveElement = document.activeElement
  menu.classList.remove('site-nav__box--hidden')
  menu.classList.add('site-nav__box--animate')
  closeBtn.focus()
})

// закрываем блок с главным меню
closeBtn.addEventListener('click', function () {
  menu.classList.add('site-nav__box--hidden')
  if (document.body.contains(menuActiveElement)) {
    menuActiveElement.focus()
  }
})

// закрываем блок с главным меню при клике на заблюренную часть
window.addEventListener('click', function (e) {
  if (e.target == menu) {
    menu.classList.add('site-nav__box--hidden')
    if (document.body.contains(menuActiveElement)) {
      menuActiveElement.focus()
    }
  }
})

// меняется активный элемент главного меню
const mainMenuList = document.getElementsByClassName('main-menu__list')
mainMenuList[0].addEventListener('click', function (e) {
  let curentActiveEl = mainMenuList[0].querySelector('.main-menu__link--active')
  if (e.target.tagName.toLowerCase() == 'a') {
    curentActiveEl.classList.remove('main-menu__link--active')
    e.target.classList.add('main-menu__link--active')
  }
})
