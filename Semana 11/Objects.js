var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Dulce', edad: 19, estudios: { esProgramador: true } };

 // ACCEDER
var persona = { nombre: 'Dulce', edad: 19, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Dulce', edad: 19, estudios: { esProgramador: true } };
persona.nombre = 'Estrella';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari', `Porsche`, `Lamborghini`];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes', `Tenis`] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones', `Shorts`];
console.log(atuendos);


