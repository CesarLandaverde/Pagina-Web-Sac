document.addEventListener(`DOMContentLoaded`,function(){
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHtml = generarMenuIndex();
    contenedorMenu.innerHTML=menuHtml;

    const footerContenedor = document.getElementById("contenedorFooter");
    const footerIndex = generarFooterIndex();
    footerContenedor.innerHTML = footerIndex;
})