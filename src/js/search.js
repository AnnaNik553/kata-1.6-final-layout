let btnSearch = document.querySelector('.img-button--search')
let modalSearch = document.querySelector('.modal-search')
let btnSearchClose = document.querySelector('.modal-search__close-btn')
let SearchActiveElement = null

btnSearch.addEventListener('click', function () {
  SearchActiveElement = document.activeElement
  modalSearch.style.display = 'block'
  modalSearch.querySelector('input').focus()
})

btnSearchClose.addEventListener('click', function () {
  modalSearch.style.display = 'none'
  if (document.body.contains(SearchActiveElement)) {
    SearchActiveElement.focus()
  }
})
