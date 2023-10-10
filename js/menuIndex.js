//funicon de index

function generarMenuIndex ()
{
  const MenuIndex= `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">


    <a class="navbar-brand" href="#">
      <i class="bi bi-flower1"></i>
      <span class="text-warning">SAC</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

      <!-- elementos del menu colapsable -->

    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html"><SPAn class="text-light">Inicio</SPAn></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./pages/Sobre Nosotros.html"><SPAn class="text-light">Sobre nostros</SPAn></a>
          </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./pages/Contactanos.html"><SPAn class="text-light">Contactanos</SPAn></a>
          </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <SPAn class="text-light">Sistema</SPAn></a>
          </a>

          <ul class="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item  text-light" href="./pages/manual del grupo.html"><SPAn class="text-light">Licencias</SPAn></a></li>
            <li><a class="dropdown-item text-light" href="./pages/info del ptc.html"><SPAn class="text-light">Tematica PTC</SPAn></a></li>   
          </ul>
        </li>
      </ul>

      <hr class="d-md-none text-white-50">

       <!-- enlaces redes sociales -->

      <ul class="navbar-nav  flex-row flex-wrap text-light">

       <li class="nav-item col-6 col-md-auto p-3">
            <i class="bi bi-twitter"></i>
            <small class="d-md-none ms-2">Twitter</small>  
        </li>

        <li class="nav-item col-6 col-md-auto p-3">
          <i class="bi bi-github"></i>
          <small class="d-md-none ms-2">GitHub</small> 
        </li>

        <li class="nav-item col-6 col-md-auto p-3">
          <i class="bi bi-whatsapp"></i>
          <small class="d-md-none ms-2">WhatsApp</small>
        </li>

        <li class="nav-item col-6 col-md-auto p-3">
          <i class="bi bi-facebook"></i>
          <small class="d-md-none ms-2">Facebook</small>
        </li>

      </ul>
      
      
      
    </div>
 
    </div>  
  </nav>

</div>`;
  return MenuIndex
}

function generarFooterIndex(){
    const footerIndex=`<footer class="bg-gradient text-dark pt-5 pb-4" >
    <div class="container text-center text-md-left">
     <div class="row text-center text-md-left">
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold text-info">Un poco sobre nosotros</h5>
        <hr class="mb-4">
        <p > hemos creado este programa con el fin de facilitar la intesa labor de los doctores con el objetivo de aligerar un poco mas su cargar, si estas interesado en el programa no dudes en descargarlo o ponerte en conctacto con nostros.les agradecemos su atencion todo el equipo de SAC
  
        </p>
      </div>
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold text-info">Estructura de la pagina</h5>
        <hr class="mb-4">
        <p>
          <a href="#" class="text-dark" style="text-decoration: none;">Inicio</a>
        <p>
          <a href="#" class="text-dark" style="text-decoration: none;">Sobre nosotros</a>
        </p>
        <p>
          <a href="#" class="text-dark" style="text-decoration: none;">Contactanos</a>
        </p>
  
        </p>
  
        
      </div>
  
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 font-weight-bold text-info text">Nuestros Contactanos</h5>
        <hr class="mb-4">
        <p>
          <li class="fas fas-home mr-3"></li>Mejicanos, San salvador, SV
        </p>
        <p>
          <li class="fas fa-envelope mr-3"></li>SAC_OFFICIAL@gmail.com
        </p>
        <p>
          <li class="fas fa-phone mr-3"></li>+503 1002-2320
        </p>
      
      </div>
     </div>
  
      <hr class="mb-4">
      <div class="row d-flex justify-content-center">
        <div>
          <p>
            Copyright 2023 Todos los derechos reservados:
            <a href="#" style="text-decoration: none;">
            <strong class="text-info">SAC</strong>
            </a>
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="text-center">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a href="#" class="text-dark"><li class="bi bi-facebook"></li></a>
              <li class="list-inline-item">
                <a href="#" class="text-dark"><li class="bi bi-twitter"></li></a>
                <li class="list-inline-item">
                <a href="#" class="text-dark"><li class="bi bi-instagram"></li></a>
  
            </li>
          </ul>
        </div>
      </div>
  
  
     </div>
    </div>
  
  </footer>`;
  return footerIndex;
}