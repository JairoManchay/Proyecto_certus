// Libreria de Funciones

// Funciones que devuelven valores

function Suma(numero1, numero2){
    return numero1 + numero2;
}


// Procesos para la aplicación

// const btnSuma = document.getElementById("btnSuma");
// const result5 = document.getElementById("resultado5");

// btnSuma.onclick = function(){
//     let variable = Suma(150, 100);
//     result5.innerText = "La respuesta del Suma: " + variable;
// }

// Funciones que NO devuelven valores

/*Factorial */
function factorial(num){
    let dato = num;
    let r = 1;
    for(let i=dato; i>0; i--){
        r*=i;
    }
    return r;
}

/* Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) */

const btnFacto = document.getElementById("btnFactorial");
const ingresarNum = document.getElementById("txtNumeroF");
btnFacto.onclick = function(){

    let numeroF = ingresarNum.value;
    let numFac = parseInt(numeroF);
    
    const numeroI = document.getElementById("numeroIngresado2");
    const fact = document.getElementById("FactorialN");
    let factorialD = factorial(numeroF);

    numeroI.innerText = "El número ingresado es: " + numFac;
    fact.innerText = `EL factorial de ${numFac} es: ` + factorialD;
}