const input = document.getElementById('textoInput');
const displayPalabras = document.getElementById(`countPalabras`);
const displayCaracteres = document.getElementById('countCaracteres');

input.addEventListener('input', () => {
    const textoOriginal = input.value;
    //eliminar los espacios con una expresión regular(/\s/g) y reemplazarlos por una cadena vacía para contar solo los caracteres sin espacios.
    const textoSinEspacios = textoOriginal.replace(/\s/g, '');
    displayCaracteres.textContent = textoSinEspacios.length;
    // .trim() elimina espacios al inicio y final.
    // .split(/\s+/) divide el texto por uno o más espacios/saltos de línea.
    const palabrasArray = textoOriginal.trim().split(/\s+/);
    // Validación: Si el textarea está vacío, split devuelve [''], cuya longitud es 1.
    // Necesitamos asegurarnos de que el primer elemento no sea una cadena vacía.
    const totalPalabras = (palabrasArray[0] === '') ? 0 : palabrasArray.length;

    displayPalabras.textContent = totalPalabras;

});    
  