// Animacion  Scroll Library
// Inicializacion de la Libreria
  AOS.init();

// Agregando la Clase Toogle
  let menu = document.getElementById("menu");
  let menuBar = document.getElementById("menu__bar");

  menuBar.addEventListener('click', function(){
    menu.classList.toggle("toogle");
  })