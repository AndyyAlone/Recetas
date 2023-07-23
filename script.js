/*const categoriasButton = document.querySelector('.button-categorias');
const categoriasSubMenu = document.querySelector('.categorias-submenu');

categoriasButton.addEventListener('click', function() {
  if (categoriasSubMenu.classList.contains('expanded')) {
    categoriasSubMenu.classList.remove('expanded');
  } else {
    categoriasSubMenu.classList.add('expanded');
  }
});
*/
let categoriasLink = document.querySelector('.categories-link');
let subMenu = document.querySelector('nav li.categories .submenu');

categoriasLink.addEventListener('click', function(event) {
  event.preventDefault(); //se evita la acción de enlace.

  subMenu.classList.toggle('active'); //se alterna el selector para activar el display del submenu
});

function cambiarColores() {
  var contorno = document.querySelector('.contorno');
  var textBackground = document.querySelector('.text-background');
  var videoContainer = document.getElementById('videoContainer');
  var colores = ["red", "green", "blue", "yellow", "purple"];
  var indice = 0;

  setInterval(function() {
    var color = colores[indice];
    contorno.style.borderColor = color;
    textBackground.style.backgroundColor = color;
    videoContainer.style.backgroundColor = color;
    indice = (indice + 1) % colores.length;
  }, 500);
}

cambiarColores();