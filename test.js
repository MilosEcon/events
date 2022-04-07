document.getElementsByClassName('dropdown-button')[0].addEventListener("click", e => {
  document.getElementsByClassName('dropdown-menu')[0].classList.toggle('active');
  console.log('radi')
})

const categoryItems = document.getElementsByClassName('item');

document.getElementsByClassName('dropdown-menu')[0].addEventListener("click", e => {
  console.log(e.target.matches("[data-dropdown-button]"));
})