//Declarar un arreglo
var listaSuper = [];

//Insertar un elemento en un indice x
listaSuper[5] = "Leche"
//Mostrar el elemento Leche dare el indice que conozco 
console.log(listaSuper[5]);
//Mostrar todos los elementos de arreglo aqui no ocupo indice 
//Solo uso el arreglo como una variable 
console.log(listaSuper);
//Como mostrar el tamaño del arreglo metodo length
console.log(listaSuper.length);
//Llenar las posiciones del arreglo 
listaSuper[0] = "Jamon";
listaSuper[1] = "Chiles";
listaSuper[2]= "Queso";
listaSuper [3]= "Refresco";
listaSuper [4]= "Shampo";
//Mostrar todos los elementos imprimiendio el arreglo como estructura 
console.log(listaSuper);
//Estraer la informacion del arreglo y procesarla 
let obtener;
for(let x = 0; x<6; x++ ){
    obtener = listaSuper[x];
    console.log(obtener + "Producto de la lista numero: " + (x + 1));
}

console.log("");
listaSuper[6]="Salchicas";
listaSuper[7]="Galletas";
listaSuper[8]="Cafe";
//listaSuper[9]="Chocolate";
listaSuper[10]="Atun";
for(let x = 0;  x<listaSuper.length; x++ ){
    obtener = listaSuper[x];
    console.log( obtener  +  " Producto de la lista numero: " + (x+1));
}

//Parte 2 metodos para arreglos 
//Como agregar un elemento a un arreglo al final de este 
//Declarar de inicio elementos  en arreglo
var colores = ["Rosa", "Amarillo"];
console.log(colores + " Mostrar elementos del arreglo");
colores.push("Verde");
console.log(colores + " Mostrar cuando se agrego el Verde");

//Como agregar un elemento al inicio del arreglo metodo unshift
colores.unshift("Rojo");
console.log(colores + " Mostrar cuando se agrego el Rojo");

//Como eliminar el ultimo elemento agregado  en el arreglo metodo pop
colores.pop();
console.log(colores + " Mostrar cuando se elimino el Verde");

//Como eliminar el primer elemento agregado en el arreglo metodo shift
colores.shift();
console.log(colores + "Mostrar cuando se elimino el Rojo");

//Ejemplos con include y con  every para busqueda y condicion 
var personas = ["Jose", "Pedro", "Maria", "Karla", "Rosa", "Carlos"];

//Ejemplo con include preguntar si el arreglo contienen un dato
var incluye = personas.includes("Manuel");
console.log(personas);
console.log(" Esta el nombre Manuelk en el arreglo: " + incluye);
incluye = personas.includes("Karla");
console.log("Esta el nombre Karla en el arreglo: " + incluye);

// Ejemplo con every pregunta si todos los elementos son diferentes a Manuel
incluye = personas.every((respuesta) => {
    return respuesta != "Manuel"
})
console.log("Ninguno de los elementos es igual a Manuel: " + incluye);

// Ejemplo con every pregunta si algun  elemento es igual  a Carlos
incluye = personas.every((respuesta) => {
    return respuesta != "Carlos"
})
console.log("Ninguno de los elementos es igual a Carlos: " + incluye);
