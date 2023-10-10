document.addEventListener(`DOMContentLoaded`,function(){
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHtml = generarMenuPages();
    contenedorMenu.innerHTML=menuHtml;

    const footerContenedor = document.getElementById("footerContenedor");
    const footerPages =  generarFooterpages();
    footerContenedor.innerHTML = footerPages;
})