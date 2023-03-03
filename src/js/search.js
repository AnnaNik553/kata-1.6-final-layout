document.querySelector('.img-button--search').addEventListener('click', function (){
  document.querySelector('.modal-search').style.display = "block";
})

document.querySelector('.modal-search__close-btn').addEventListener('click', function() {
  document.querySelector('.modal-search').style.display = "none";
})
