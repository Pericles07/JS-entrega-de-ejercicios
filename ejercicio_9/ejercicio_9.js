const input = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaUI = document.getElementById('listaTareas');
const btnLimpiar = document.getElementById('btnLimpiar');

// Cargar tareas desde LocalStorage al iniciar
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function guardarYRenderizar() {
    // Guardar en localStorage (convertir array a JSON)
    localStorage.setItem('tareas', JSON.stringify(tareas));

    // Limpiar la lista actual en el html
    listaUI.innerHTML = '';

    //dibujar cada tarea en la lista
    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange ="alternarTarea(${indice})">
            <span class="${tarea.completada ? 'completada' : ''}">${tarea.texto}</span>
        `;
        listaUI.appendChild(li);
    });
}

btnAgregar.addEventListener('click', () => {
    const texto = input.value.trim();
    if(texto) {
        tareas.push({ texto: texto, completada: false });
        input.value = '';
        guardarYRenderizar();
    }
});

window.alternarTarea = function(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    guardarYRenderizar();
};

btnLimpiar.addEventListener('click', () => {
    tareas = tareas.filter(tarea => !tarea.completada);
    guardarYRenderizar();
});

guardarYRenderizar();