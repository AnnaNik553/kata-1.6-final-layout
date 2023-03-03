let modalCall = document.querySelector(".modal-call");
let btnCall = document.getElementsByClassName("img-button--call");
let btnCallClose = document.querySelector(".modal-call__close");


// вешаем обработчики кликов на кнопки "заказать звонок", модальное окно становиться видимым
for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener("click", function () {
    modalCall.style.display = "block";
  })
}

// модальное окно закрывается по кнопке
btnCallClose.addEventListener("click", function () {
  modalCall.style.display = "none";
})

// модальное окно закрывается при клике на заблюренную область
window.addEventListener('click', function (event) {
  if (event.target == modalCall) {
    modalCall.style.display = "none";
  }
})
