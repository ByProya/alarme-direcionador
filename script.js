

  function pegarTempo() {

    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();

    const displayHora = document.getElementById("tempo");

    const mold_display = `${hora}:${minutos}:${segundos} AM`;
    const mold_display_ = `${hora}:0${minutos}:${segundos} AM`;
    const mold_display_2 = `${hora}:0${minutos}:0${segundos} AM`;
    const mold_display_3 = `${hora}:${minutos}:0${segundos} AM`;

    const mold_displayPM = `${hora}:${minutos}:${segundos} PM`;
    const mold_display_1PM = `${hora}:0${minutos}:${segundos} PM`;
    const mold_display_2PM = `${hora}:0${minutos}:0${segundos} PM`;
    const mold_display_3PM = `${hora}:${minutos}:0${segundos} PM`;



    if (hora < Number(12) && minutos < 10) {
        displayHora.innerHTML = mold_display_1;
    } else {
        displayHora.innerHTML = mold_display;
    }

    if (hora < Number(12) && segundos < 10 && minutos < 10) {
        displayHora.innerHTML = mold_display_2;
    } else if (hora < Number(12) && segundos && segundos < 10 && minutos >= 10) {
        displayHora.innerHTML = mold_display_3;
    }

    if (hora > Number(12) && minutos < 10) {
        displayHora.innerHTML = mold_display_1pm;
    } else {
        displayHora.innerHTML = mold_displayPM;
    }

    if (hora > Number(12) && segundos < 10 && minutos < 10) {
        displayHora.innerHTML = mold_display_2PM;
    } else if (hora > Number(12) && segundos && segundos < 10 && minutos >= 10) {
        displayHora.innerHTML = mold_display_3PM;
    }

}  

    pegarTempo();
    setInterval(pegarTempo, 1000)

    setInterval(function() {

        const date = new Date();
        const hora = date.getHours();
        const minutos = date.getMinutes();
        const segundos = date.getSeconds();

            const dpHora = Number(document.getElementById('dphora').value)
            const dpMinutos = Number(document.getElementById('dpminutos').value)

            const linkDirecionador = document.getElementById('input').value
        
            const alarme = new Audio('audio/ringtone.mp3')
        
            if(hora === dpHora && minutos === dpMinutos) {
                alarme.play()

                setTimeout(function() {
                    window.open(linkDirecionador, '_self')
                }, 5000)
        }
        }
    , 1000)


    
    
    

