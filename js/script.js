jQuery('document').ready(function($){
    var menuPagina =$('.menu'),
        menu= $('.navegador ul');
    menuPagina.click(function(){

        if( menu.hasClass('mostrar')){
            menu.removeClass('mostrar');
        }else{
            menu.addClass('mostrar');
        }
    });
});

let cerrar = document.querySelectorAll(".cerrar")[0];
let abirir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".contenedor-modal")[0];

abirir.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(function(){
        modal.classList.toggle("modal-cerrar");
    },500)
    setTimeout(function(){
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
    },300)

});
cerrar.addEventListener("click",function(){
    
    setTimeout(function(){
        modal.classList.toggle("modal-cerrar");
    },300)
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },500)

})

$(document).ready(function () {
    $('#tablausuarios').DataTable();
});


let cerrarse = document.querySelectorAll(".cerrar-ses")[0];
let abirirse = document.querySelectorAll(".servicios")[0];
let modalse = document.querySelectorAll(".seleccion")[0];
let seleccionC = document.querySelectorAll(".seleccion-modal")[0];

abirirse.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(function(){
        modalse.classList.toggle("seleccion-cerrar");
    },500)
    setTimeout(function(){
        seleccionC.style.opacity = "1";
        seleccionC.style.visibility = "visible";
    },300)

});
cerrarse.addEventListener("click",function(){
    
    setTimeout(function(){
        modalse.classList.toggle("seleccion-cerrar");
    },300)
    setTimeout(function(){
        seleccionC.style.opacity = "0";
        seleccionC.style.visibility = "hidden";
    },500)

})
let cerrarlog = document.querySelectorAll(".cerrarlog")[0];
let abirirlog = document.querySelectorAll(".ingreso-seleccion")[0];
let modalog = document.querySelectorAll(".loginin")[0];
let seleccionlog = document.querySelectorAll(".contenedor-ingreso")[0];

abirirlog.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(function(){
        modalog.classList.toggle("loginin-cerrar");
    },500)
    setTimeout(function(){
        seleccionlog.style.opacity = "1";
        seleccionlog.style.visibility = "visible";
    },300)

});
cerrarlog.addEventListener("click",function(){
    
    setTimeout(function(){
        modalog.classList.toggle("loginin-cerrar");
    },300)
    setTimeout(function(){
        seleccionlog.style.opacity = "0";
        seleccionlog.style.visibility = "hidden";
    },500)

})
let cerraragra = document.querySelectorAll(".cerraragra")[0];
let abiriragra = document.querySelectorAll("#Enviar")[0];
let modalagra = document.querySelectorAll(".agradecimiento")[0];
let seleccionagra = document.querySelectorAll(".contenedor-agradecimiento")[0];

abiriragra.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(function(){
        modalagra.classList.toggle("loginin-cerrar");
    },500)
    setTimeout(function(){
        seleccionagra.style.opacity = "1";
        seleccionagra.style.visibility = "visible";
    },300)

});
cerraragra.addEventListener("click",function(){
    
    setTimeout(function(){
        modalagra.classList.toggle("loginin-cerrar");
    },300)
    setTimeout(function(){
        seleccionagra.style.opacity = "0";
        seleccionagra.style.visibility = "hidden";
    },500)

})
/*jQuery('document').ready(function($){
    var formulogin2p =$('.formulogin2'),
        formulogin2= $('.navegadorlogin ul');
    formulogin2p.click(function(){

        if( formulogin2.hasClass('login')){
            formulogin2.removeClass('login');
        }else{
            formulogin2.addClass('login');
        }
    });
});*/
window.sr=ScrollReveal();
    sr.reveal('.cabecera', {
        duration: 2000,
        origin:'botton',
        distance:'-100px'
    });


 