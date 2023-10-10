const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre');
  const nombreValor = nombreInput.value;
  const apellido = document.getElementById('nombre');
  const apellidoValor = nombreInput.value;
  const cell = document.getElementById('nombre');
  const cellValor = nombreInput.value;
  const correo = document.getElementById('nombre');
  const correoValor = nombreInput.value;
  
  Swal.fire({
    icon: 'success',
    title: '¡Formulario enviado!',
    text: `Gracias por tus comentarios ${nombreValor} , Tu mensaje ha sido enviado correctamente.`,
  });

  formulario.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(function (star, index) {
        star.addEventListener('click', function () {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('checked');
            }
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('checked');
            }
        });
    });
});





const formulario2 = document.getElementById('formularioContacto2'); // Cambiado a 'formularioContacto2'

formulario2.

formulario
addEventListener('submit', function(event) { // Cambiado a 'formularioContacto2'
  event.
 
preventDefault();

  

const nombreInput = document.getElementById('nombre');
  
 
const nombreValor = nombreInput.value;
  const apellidoInput = document.getElementById('apellido'); // Cambiado a 'apellido'
  const apellidoValor = apellidoInput.value; // Cambiado a 'apellidoValor'
  
 
const cellInput = document.getElementById('numero'); // Cambiado a 'numero'
  
 
const cellValor = cellInput.value; // Cambiado a 'cellValor'
  const correoInput = document.getElementById('email'); // Cambiado a 'email'
  
 
const correoValor = correoInput.value; // Cambiado a 'correoValor'

  Swal.fire({
    
    icon: 'success',
    title: '¡Formulario enviado!',
    text: `Gracias por tus comentarios ${nombreValor} ${apellidoValor}, Tu mensaje ha sido enviado correctamente.`,
  });

 
formulario2.reset(); // Cambiado a 'formulario2'
});





document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(function (star, index) {
        star.addEventListener('click', function () {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('checked');
            }
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('checked');
            }
        });
    });
});