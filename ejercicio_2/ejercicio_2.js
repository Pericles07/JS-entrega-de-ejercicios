let contador = 0;

const texto = document.getElementById('contadorText');
const boton = document.getElementById('botonContador');
const reiniciar = document.getElementById('botonReiniciar');

boton.addEventListener('click', () => {
    contador++;
    texto.textContent = `Clics : ${contador}`;
})

reiniciar.addEventListener('click', () => {
    contador = 0;
    texto.textContent = `Clics : ${contador}`;
})