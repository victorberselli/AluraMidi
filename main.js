function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    //template string
    const idAudio = `#som_${instrumento}`
    // passando um parametro direto na invocação da função 
    // Entao utilizamos uma funcionalidade no javascript chamada função anonima
    // function () { chamo a função passando parametro }  
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(event){
        
        listaDeTeclas[contador].classList.add('ativa');
        console.log(event)

    }
    tecla.onkeyup = function(){
        listaDeTeclas[contador].classList.remove('ativa');
    }
    




    //console.log(idAudio)   
    //console.log(listaDeTeclas[contador].classList[1])
    
}
// const som = document.querySelector('#som_tecla_pom').play()