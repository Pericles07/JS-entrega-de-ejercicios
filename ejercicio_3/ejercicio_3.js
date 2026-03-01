const input = document.getElementById('inputTarea');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto !== ''){
        //crear el elemento de la lista
        const nuevoItem = document.createElement('li');
        nuevoItem.className = 'item-tarea';
        nuevoItem.textContent = texto;

        //crear el boton de eliminar
        const btnEliminar = document.createElement('buton');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';

        //logica para eliminar la tarea
        btnEliminar.onclick = function() {
            nuevoItem.remove();
        };

        //unir todo y mostrarlo 
        nuevoItem.appendChild(btnEliminar);
        lista.appendChild(nuevoItem);

        //limpiar el input
        input.value = '';
        input.focus();
    }else{
        alert('¡Escribe algo primero!');
    }
});