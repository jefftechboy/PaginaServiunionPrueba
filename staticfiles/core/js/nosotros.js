// Selecciona el contenedor principal con la clase .cont
var $cont = document.querySelector('.cont');

// Convierte la NodeList de elementos con clase .el en un array utilizando [].slice.call
var $elsArr = [].slice.call(document.querySelectorAll('.el'));

// Convierte la NodeList de botones de cierre con clase .el__close-btn en un array
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

// Retrasa la eliminación de la clase .s--inactive del contenedor principal $cont después de 200 milisegundos
setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

// Itera sobre cada elemento .el en $elsArr y agrega un event listener para 'click'
$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    // Si el elemento ya tiene la clase .s--active, no hagas nada y devuelve
    if (this.classList.contains('s--active')) return;
    
    // Agrega la clase .s--el-active al contenedor principal $cont
    $cont.classList.add('s--el-active');
    
    // Agrega la clase .s--active al elemento actual $el
    this.classList.add('s--active');
  });
});

// Itera sobre cada botón de cierre en $closeBtnsArr y agrega un event listener para 'click'
$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    // Evita la propagación del evento click
    e.stopPropagation();
    
    // Elimina la clase .s--el-active del contenedor principal $cont
    $cont.classList.remove('s--el-active');
    
    // Encuentra el primer elemento .el con la clase .s--active y remueve la clase .s--active
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
