let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('El Pais de los Volcanes y el Cafe')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  
  