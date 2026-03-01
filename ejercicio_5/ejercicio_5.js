const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');

const calcular = (operacion) => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if(isNaN(num1) || isNaN(num2)){
        resultado.textContent = 'Por favor, ingresa números validos';
        resultado.classList.add('error');
        return;
    }

    resultado.classList.remove('error');
    let res;

    switch(operacion){
        case 'sumar':
            res = num1 + num2;
            break;
        case 'restar':
            res = num1 - num2;
            break;
        case 'multiplicar':  
            res = num1 * num2; 
            break;
        case 'dividir':
            if(num2 === 0){
                resultado.textContent = 'No se puede dividir entre cero';
                resultado.classList.add('error');
                return;
            }
            res = num1 / num2;
            break; 
    }

    resultado.textContent = `Resultado: ${res}`;
};

btnSumar.addEventListener('click', () => calcular('sumar'));
btnRestar.addEventListener('click', () => calcular('restar'));
btnMultiplicar.addEventListener('click', () => calcular('multiplicar'));
btnDividir.addEventListener('click', () => calcular('dividir'));