const boton = document.getElementById('btn-color');

function colorAleatorio() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue}`;
}

boton.addEventListener('click', () => {
    document.body.style.backgroundColor = colorAleatorio();
}); 