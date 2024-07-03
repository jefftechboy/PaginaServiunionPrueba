var conjuntoAzul = document.getElementById("conjuntoAzul");
    var conjuntoMorado = document.getElementById("conjuntoMorado");
    var conjuntoRojo = document.getElementById("conjuntoRojo");
    var conjuntoVerde = document.getElementById("conjuntoVerde");

    var azulActivo = false;
    var moradoActivo = false;
    var rojoActivo = false;
    var verdeActivo = false;

    function toggleConjunto(color) {
      if (color === 'blue') {
        if (!azulActivo) {
          // Mostrar conjunto azul
          conjuntoAzul.style.display = 'flex';
          // Aplicar transición suave a los contenedores azules
          var contenedoresAzul = document.querySelectorAll('#conjuntoAzul .header-container-2');
          contenedoresAzul.forEach(function(contenedor) {
            contenedor.classList.add('active');
          });
          azulActivo = true;

          // Ocultar conjunto morado si está activo
          if (moradoActivo) {
            conjuntoMorado.style.display = 'none';
            var contenedoresMorado = document.querySelectorAll('#conjuntoMorado .header-container-2');
            contenedoresMorado.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            moradoActivo = false;
          }
          // Ocultar conjunto rojo si está activo
          if (rojoActivo) {
            conjuntoRojo.style.display = 'none';
            var contenedoresRojo = document.querySelectorAll('#conjuntoRojo .header-container-2');
            contenedoresRojo.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            rojoActivo = false;
          }
          // Ocultar conjunto verde si está activo
          if (verdeActivo) {
            conjuntoVerde.style.display = 'none';
            var contenedoresVerde = document.querySelectorAll('#conjuntoVerde .header-container-2');
            contenedoresVerde.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            verdeActivo = false;
          }
        } else {
          // Cerrar conjunto azul
          var contenedoresAzul = document.querySelectorAll('#conjuntoAzul .header-container-2');
          contenedoresAzul.forEach(function(contenedor) {
            contenedor.classList.remove('active');
          });
          setTimeout(function() {
            conjuntoAzul.style.display = 'none';
          }, 300); // Esperar a que termine la transición
          azulActivo = false;
        }
      }

      if (color === 'purple') {
        if (!moradoActivo) {
          // Mostrar conjunto morado
          conjuntoMorado.style.display = 'flex';
          // Aplicar transición suave a los contenedores morados
          var contenedoresMorado = document.querySelectorAll('#conjuntoMorado .header-container-2');
          contenedoresMorado.forEach(function(contenedor) {
            contenedor.classList.add('active');
          });
          moradoActivo = true;

          // Ocultar conjunto azul si está activo
          if (azulActivo) {
            conjuntoAzul.style.display = 'none';
            var contenedoresAzul = document.querySelectorAll('#conjuntoAzul .header-container-2');
            contenedoresAzul.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            azulActivo = false;
          }
          // Ocultar conjunto rojo si está activo
          if (rojoActivo) {
            conjuntoRojo.style.display = 'none';
            var contenedoresRojo = document.querySelectorAll('#conjuntoRojo .header-container-2');
            contenedoresRojo.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            rojoActivo = false;
          }
          // Ocultar conjunto verde si está activo
          if (verdeActivo) {
            conjuntoVerde.style.display = 'none';
            var contenedoresVerde = document.querySelectorAll('#conjuntoVerde .header-container-2');
            contenedoresVerde.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            verdeActivo = false;
          }
        } else {
          // Cerrar conjunto morado
          var contenedoresMorado = document.querySelectorAll('#conjuntoMorado .header-container-2');
          contenedoresMorado.forEach(function(contenedor) {
            contenedor.classList.remove('active');
          });
          setTimeout(function() {
            conjuntoMorado.style.display = 'none';
          }, 300); // Esperar a que termine la transición
          moradoActivo = false;
        }
      }

      if (color === 'red') {
        if (!rojoActivo) {
          // Mostrar conjunto rojo
          conjuntoRojo.style.display = 'flex';
          // Aplicar transición suave a los contenedores rojos
          var contenedoresRojo = document.querySelectorAll('#conjuntoRojo .header-container-2');
          contenedoresRojo.forEach(function(contenedor) {
            contenedor.classList.add('active');
          });
          rojoActivo = true;

          // Ocultar conjunto azul si está activo
          if (azulActivo) {
            conjuntoAzul.style.display = 'none';
            var contenedoresAzul = document.querySelectorAll('#conjuntoAzul .header-container-2');
            contenedoresAzul.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            azulActivo = false;
          }
          // Ocultar conjunto morado si está activo
          if (moradoActivo) {
            conjuntoMorado.style.display = 'none';
            var contenedoresMorado = document.querySelectorAll('#conjuntoMorado .header-container-2');
            contenedoresMorado.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            moradoActivo = false;
          }
          // Ocultar conjunto verde si está activo
          if (verdeActivo) {
            conjuntoVerde.style.display = 'none';
            var contenedoresVerde = document.querySelectorAll('#conjuntoVerde .header-container-2');
            contenedoresVerde.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            verdeActivo = false;
          }
        } else {
          // Cerrar conjunto rojo
          var contenedoresRojo = document.querySelectorAll('#conjuntoRojo .header-container-2');
          contenedoresRojo.forEach(function(contenedor) {
            contenedor.classList.remove('active');
          });
          setTimeout(function() {
            conjuntoRojo.style.display = 'none';
          }, 300); // Esperar a que termine la transición
          rojoActivo = false;
        }
      }

      if (color === 'green') {
        if (!verdeActivo) {
          // Mostrar conjunto verde
          conjuntoVerde.style.display = 'flex';
          // Aplicar transición suave a los contenedores verdes
          var contenedoresVerde = document.querySelectorAll('#conjuntoVerde .header-container-2');
          contenedoresVerde.forEach(function(contenedor) {
            contenedor.classList.add('active');
          });
          verdeActivo = true;

          // Ocultar conjunto azul si está activo
          if (azulActivo) {
            conjuntoAzul.style.display = 'none';
            var contenedoresAzul = document.querySelectorAll('#conjuntoAzul .header-container-2');
            contenedoresAzul.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            azulActivo = false;
          }
          // Ocultar conjunto morado si está activo
          if (moradoActivo) {
            conjuntoMorado.style.display = 'none';
            var contenedoresMorado = document.querySelectorAll('#conjuntoMorado .header-container-2');
            contenedoresMorado.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            moradoActivo = false;
          }
          // Ocultar conjunto rojo si está activo
          if (rojoActivo) {
            conjuntoRojo.style.display = 'none';
            var contenedoresRojo = document.querySelectorAll('#conjuntoRojo .header-container-2');
            contenedoresRojo.forEach(function(contenedor) {
              contenedor.classList.remove('active');
            });
            rojoActivo = false;
          }
        } else {
          // Cerrar conjunto verde
          var contenedoresVerde = document.querySelectorAll('#conjuntoVerde .header-container-2');
          contenedoresVerde.forEach(function(contenedor) {
            contenedor.classList.remove('active');
          });
          setTimeout(function() {
            conjuntoVerde.style.display = 'none';
          }, 300); // Esperar a que termine la transición
          verdeActivo = false;
        }
      }
    }