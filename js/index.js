window.sr=ScrollReveal();
    sr.reveal('.cabecera', {
        duration: 2000,
        origin:'botton',
        distance:'-100px'
    });
    
    let recerrar = document.querySelectorAll(".recerrar")[0];
    let reabrir = document.querySelectorAll(".registro-abrir")[0];
    let remodal = document.querySelectorAll(".registro")[0];
    let remodalC = document.querySelectorAll(".contenedor-registro")[0];
    
    reabrir.addEventListener("click",function(e){
        e.preventDefault();
        setTimeout(function(){
            remodal.classList.toggle("registro-cerrar");
        },500)
        setTimeout(function(){
            remodalC.style.opacity = "1";
            remodalC.style.visibility = "visible";
        },300)
    
    });
    recerrar.addEventListener("click",function(){
        
        setTimeout(function(){
            remodal.classList.toggle("registro-cerrar");
        },300)
        setTimeout(function(){
            remodalC.style.opacity = "0";
            remodalC.style.visibility = "hidden";
        },500)
    
    })
    