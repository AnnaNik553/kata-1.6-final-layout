let modalFeedback = document.querySelector('.modal-feedback')
let btnFeedback = document.getElementsByClassName('img-button--feedback')
let btnFeedbackClose = document.querySelector('.modal-feedback__close')
let FeedbackActiveElement = null

// вешаем обработчики кликов на кнопки "заказать звонок", модальное окно становиться видимым
for (let i = 0; i < btnFeedback.length; i++) {
  btnFeedback[i].addEventListener('click', function () {
    FeedbackActiveElement = document.activeElement
    modalFeedback.style.display = 'block'
    modalFeedback.querySelector('input').focus()
  })
}

// модальное окно закрывается по кнопке
btnFeedbackClose.addEventListener('click', function () {
  modalFeedback.style.display = 'none'
  if (document.body.contains(FeedbackActiveElement)) {
    FeedbackActiveElement.focus()
  }
})

// модальное окно закрывается при клике на заблюренную область
window.addEventListener('click', function (event) {
  if (event.target == modalFeedback) {
    modalFeedback.style.display = 'none'
    if (document.body.contains(FeedbackActiveElement)) {
      FeedbackActiveElement.focus()
    }
  }
})
