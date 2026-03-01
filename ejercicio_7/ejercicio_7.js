const inputLongitud = document.getElementById('longitud');
const btnGenerar = document.getElementById('btnGenerar');
const displayResultado = document.getElementById('resultado');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

btnGenerar.addEventListener('click', () => {
    const longitud = parseInt(inputLongitud.value);

    if(isNaN(longitud) || longitud < 4) {
        displayResultado.textContent = "Por favor, ingresa una longitud válida (mínimo 4 caracteres).";
        displayResultado.classList.add('error');
        return;
    }

    displayResultado.classList.remove('error');
    let contraseñaGenerada = '';

    for(let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseñaGenerada += caracteres.charAt(indiceAleatorio);
    }

    displayResultado.textContent = contraseñaGenerada;
})