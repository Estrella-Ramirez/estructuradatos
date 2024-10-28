function devuelvoUsuario() {
    return 'Estrella';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);