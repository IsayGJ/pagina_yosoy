window.addEventListener('scroll', function(){
    let animacion = document.getElementById('img_ac');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    // console.log(posicionObj1);
    let tamPantalla = window.innerHeight/2.5;
    if(posicionObj1 < tamPantalla){
        $("#img_ac").addClass("animate__animated animate__heartBeat");
        $("#txt_img_ac").addClass("animate__animated animate__heartBeat");
        // console.log("ANIMAR");
    }else{
        $("#img_ac").removeClass("animate__animated animate__heartBeat");
        $("#txt_img_ac").removeClass("animate__animated animate__heartBeat");
        // console.log("NO ANIMAR");
    }
})
