const buscador = document.getElementById('buscador');

const items = document.querySelectorAll('#listaMascotas li');

buscador.addEventListener('input', () => {
    const filtro = buscador.value.toLowerCase().trim();

    items.forEach(item => {
        const textoItem = item.textContent.toLowerCase();

        if(textoItem.includes(filtro)){
            item.classList.remove('hiden');
        }else{
            item.classList.add('hiden');
        }
    });
});