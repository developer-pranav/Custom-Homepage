const menuButton = document.querySelector('.menu');
const menu = document.querySelector('.sidebar');
const change = document.querySelector('.fa-solid')

menuButton.addEventListener('click', function() {
  menu.classList.toggle('active');
  if(change.classList.contains('fa-bars'))
  {
    change.classList.replace('fa-bars','fa-times');
  }
  else
  {
    change.classList.replace('fa-times','fa-bars');
  }
});
