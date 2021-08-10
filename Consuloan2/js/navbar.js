var header = document.getElementById('container-nav');
var navbar = document.getElementById('navbar-home');
var paragraph = document.getElementById('paragraph');
var ulContainer = document.getElementById('ul-container-home');
var icon = document.getElementsByClassName('icon')[0];
var body = document.getElementById('body');


icon.addEventListener('click', openMenu);
function openMenu(){
    if( ulContainer.style.display=='block'){
        ulContainer.style.display='none'
    }
   else{
    ulContainer.style.display='block'
   }
}

