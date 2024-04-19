let numeroSecreto = 0;
let intento = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
let numeroMaximoInento = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
        /* listaNumeroSorteado = [];
        document.getElementById('verificar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');*/
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function verificarNumeroSecreto() {
    let numeroUsuario = parseFloat(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);

    if (intento > numeroMaximoInento) {
        asignarTextoElemento('p', 'Se agotaron los intentos. Reinicia el Juego');
        document.getElementById('verificar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto === numeroUsuario) {
            (asignarTextoElemento('p', `Acertaste al número en ${intento} ${(intento === 1) ? 'vez' : 'veces'}`));
            document.getElementById('verificar').setAttribute('disabled', 'true');
            document.getElementById('reiniciar').removeAttribute('disabled');
            limpiarCaja();
        } else {
            if (numeroSecreto > numeroUsuario) {
                asignarTextoElemento('p', 'El numero secreto es mayor')
            } else {
                asignarTextoElemento('p', 'El numero secreto es menor')
            }
            intento++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja()
    condicionesInciales();
    document.getElementById('verificar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}



condicionesInciales()
