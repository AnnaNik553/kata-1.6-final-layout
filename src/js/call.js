let modalCall = document.querySelector('.modal-call')
let btnCall = document.getElementsByClassName('img-button--call')
let btnCallClose = document.querySelector('.modal-call__close')
let CallActiveElement = null

// вешаем обработчики кликов на кнопки "заказать звонок", модальное окно становиться видимым
for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener('click', function () {
    CallActiveElement = document.activeElement
    modalCall.style.display = 'block'
    modalCall.querySelector('input').focus()
  })
}

// модальное окно закрывается по кнопке
btnCallClose.addEventListener('click', function () {
  modalCall.style.display = 'none'
  if (document.body.contains(CallActiveElement)) {
    CallActiveElement.focus()
  }
})

// модальное окно закрывается при клике на заблюренную область
window.addEventListener('click', function (event) {
  if (event.target == modalCall) {
    modalCall.style.display = 'none'
    if (document.body.contains(CallActiveElement)) {
      CallActiveElement.focus()
    }
  }
})
