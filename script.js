
    function si(){
        let etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", "sonidoWin.mp3");
        etiquetaAudio.play();
        var button = document.getElementById("intentos");
        alert('¡Gracias ingeniero!😁\nIntentos Hasta aprobarme ' + button.value);
    }
    function no(){
        let etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", "sonidoWin.mp3");
        etiquetaAudio.play();
        var button = document.getElementById("intentos");
        alert('😭\nMe atrapaste en ' + button.value + ' intentos');
    }

    function mueveElBoton(){
        width = window.innerWidth;
        height = window.innerHeight;

        newWidth = (Math.random() * width);
        newHeight = (Math.random() * height);

        document.getElementById('btnNo').style.position = "absolute";
        document.getElementById('btnNo').style.left = newWidth + "px";
        document.getElementById('btnNo').style.top = newHeight + "px";
    

        let etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", "sonidoEsc.mp3");
        etiquetaAudio.play();

        var button = document.getElementById("intentos");
        var i = parseInt(button.value);
        i += 1;
        button.value = i.toString();
        button.textContent = i.toString();

    }


