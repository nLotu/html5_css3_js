function menuHambur(){
    var menu = document.getElementById("btn_header");

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function menuTrabajo(trabajo){
    var fondo = document.getElementById("img_trabajo");

    if(trabajo == "cocinas"){
        fondo.style.backgroundImage = 'url("images/cocina.png")';
    }else if(trabajo == "muebles"){
        fondo.style.backgroundImage = 'url("images/muebles.png")';
    }else if (trabajo == "pisos"){
        fondo.style.backgroundImage = 'url("images/pisos.png")';
    }else{
        fondo.style.backgroundImage = 'url("images/vinoteca.png")';
    }
}