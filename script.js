// El let h1 = document, hace que adopte el valor del DOM, que es el documento html
// El getElementById sirve para buscar algo dentro del elemento por su Id

let intentos = 6;


const button = document.getElementById("guess-button");


let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log(palabra)
// si devuelve null es probablemente porque escribi mal

// add.EventListener es una funcion que se usa con otra funcion, debe tener 2 parametros

button.addEventListener ("click", Intentar);
function Intentar(){
    const intento = leerIntento();

    if (intento.length !== 5){
        alert("Debe ingresar solo palabras de 5 letras")
        return  
    }

    intentos = intentos - 1
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    console.log(ROW)
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = intento[i]; 
        if(palabra[i]==intento[i]){
            SPAN.style.backgroundColor = 'green';
            console.log(intento[i],'verde')
        }else if(palabra.includes(intento[i])){
            SPAN.style.backgroundColor = 'yellow';
            console.log((intento[i]), 'amarillo')
        } else {
            SPAN.style.backgroundColor = 'gray';
            console.log(intento[i],'gris') }
      
    console.log(SPAN);
    ROW.appendChild(SPAN)
        }
GRID.appendChild(ROW);
if(palabra == intento){
    console.log('Ganaste')
    terminar("<h1> Ganaste </h1>")
}
 if (intentos == 0){
console.log("Perdiste",)
terminar("<h1> Perdiste </h1>")
}
console.log("te quedan", intentos,"intentos")

}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    console.log(contenedor)
}

// Vector o array (pueden ser de tipo texto y numeros a la vez)
// Para imprimir solo un elemento de la lista se puede usar console.log(lista[3])
// Se le puede agregar valores con lista[5] = 3
// for (let i = 0; i < palabra.lenght; i++)