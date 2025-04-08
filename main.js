let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
//encabezado1.innerText = "Ejercicio DOM"
//encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

let encabezado2 = document.getElementById("encabezado2");
//encabezado2.innerText = "DOM Exercise";

// console.log(encabezado1.innerText);

let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li"); //muestea el prmiro

let otrosElementos = document.querySelectorAll("ul>li"); //todos

console.log("otroElemento: ", otroElemento);

console.log(listas.length); //2
//console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));


console.log(elementos.length);  //10

let contador = 0;
function modifica() {
    //encabezado1.innerText = "Ejercicio DOM"
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;
}

btnMostrar.addEventListener("click", function (event) {
    //console.log("boton btnModificar presionado");
    event.preventDefault();

    let element = document.createElement("li");
    element.innerText = "Another item"; //<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

    // before: inserta el elemento antes de la lista
    //listas.item(0).before(element);
    // prepent: inserta el elemento al principio de la lista
    //listas.item(0).prepend(element2);
    // append: inserta el elemento al final de la lista
    listas.item(0).append(element);
    // after: inserta el elemento despues de la lisa
    listas.item(0).after(element2);

});
