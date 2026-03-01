let segundos = 0;
let intervalo = null;

const relojDisplay = document.getElementById('reloj');
const btnIniciar = document.getElementById('btnIniciar');
const btnPausar = document.getElementById('btnPausar');
const btnReiniciar = document.getElementById('btnReiniciar');

function formatearTiempo(totalSegundos) {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos =  Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
};

btnIniciar.addEventListener('click', () => {
    if(intervalo) return;

    intervalo = setInterval(() => {
        segundos++;
        relojDisplay.textContent = formatearTiempo(segundos);
    }, 1000);
    
    btnIniciar.disabled = true;
});

btnPausar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    btnIniciar.disabled = false;
});

btnReiniciar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    relojDisplay.textContent = "00:00:00";
    btnIniciar.disabled = false;
});