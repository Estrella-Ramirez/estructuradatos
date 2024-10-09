//Ejercicio de variables en js
// Declaracion de variables con var
//Variable de tipo String no hay diferencia si uso comilla simple o doble 
var nombre = "Felipe";
var cuidad = "Ajalpan";
//Variable de tipo numero
var entero = 90;
var negativo =-120;
var decimal = 19.67; 
//Variables de tipo Booleano
var verdad = true;
var mentira = false; 
//Variable de tipo Undifined
var noseeltipo;
//Variable Null
var nula = null;

//Operadores matematicos en Js
// Variables contenedores
var num1, num2
 // Suma
 num1 = 50;
 console.log(50 + 5);
 console.log(num1 + 5);
// Resta 
num2 = 20;
console.log(num1, num2);
//Division
console.log( 250/ num1);
console.log( num1/num2)
//Modulo
console.log(num1 % num2);
// Prueba de procedencia 
console.log( 3 + 5 * 2 - 8 * 5 / 2);
console.log(3 / 2 + 5 * 4 - 3 + 100 /2 *4, "El resultado")
//Operadores de comparacion o relacionales 
//Ejemplos <,>, <=,>=, ==,!=
console.log("4 es mayor que 7:", 4 > 7);
console.log("4 es menor que 7: ", 4 < 7);
console.log("4 es mayor o igualque 7:",  4 >= 7 );
console.log("4 es menor o igualque 7:", 4 <= 7);
console.log("4 es igual que 7:", 4 == 7);
console.log("4 es diferente a 7:", 4 != 7);

// Igualdad vs igualdad estricta 
console.log("Igualdad estricta");
console.log(3 == 3);
console.log(3 === 3);
console.log(3 == "3");
console.log(3 === "3");

//Asociactividad
console.log("")
console.log("Asociactividad")
var a = 20;
var b = 22;
var c = (a = b) + 60;

console.log(16/2/4);

console.log("Valor de a:",a); 
console.log("Valor de b:",b); 
console.log("Valor de c:",c); 
//Nota las operaciones  +,/,-,*, etc son de izq a derecha 
//Las operaciones  <,>, <=,>=, ==,!= son de derecha a izquierda 

//Funciones en JS
//Ejemplo 1 declarando una funcion sin parametros 
function saludar(){
    console.log("Hola como estas, usaste la funcion saludar");

}

// Ejemplo 1 usando la funcion 
saludar();


//Ejemplo 2 encapsular los ejercicios anteriores
function operacionesComparacion()
{
    console.log("4 es mayor que 7: ", 4 > 7);
    console.log("4 es menor que 7: ", 4 < 7);
    console.log("4 es mayor o igual que 7: ", 4 >= 7);
    console.log("4 es nemor o igual que 7: ", 4 <= 7);
    console.log("4 es igual que 7: ", 4 == 7);
    console.log("4 es diferente a 7: ", 4 != 7);   
}
operacionesComparacion();
function igualdadEstricta(){
    console.log("Igualdad extricta");
    console.log(3 == 3);
    console.log(3 === 3);
    console.log(3 == "3");
    console.log(3 === "3");
    console.log("BOB ESPONJA");
    console.log(0 == "0");
    console.log(0 == []);
    console.log("0" == []);
    console.log(true == 1);
    console.log("Estrella",false === 0);
}
igualdadEstricta();

function suma(a, b) {
    return a + b;
}

var sumaDos = (x, y) => {
    return x + y;
  }

var rsuma = suma(10,9);
console.log(rsuma);

var rsuma2 = sumaDos(50,60);
console.log(rsuma2);
