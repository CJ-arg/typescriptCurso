//Booleans
var esHombre = true;
console.log(typeof esHombre);
//Numbre (enteros y decimales)
var numero = 35;
numero = 45;
//String
var frase = "estoy estudiando typescript";
//Any
var frase2 = "soy on string";
frase2 = 45;
frase2 = true;
//Tupla y Array 
var lista = ['lechuga', 'tomate', 'cebolla'];
var tuplaLista = ['casa', 34, true];
tuplaLista.push('sandia', 43);
lista.push('sandia');
console.log(tuplaLista, lista);
//Enum o enumerables
var Podium;
(function (Podium) {
    Podium[Podium["Spain"] = 0] = "Spain";
    Podium[Podium["Alemania"] = 1] = "Alemania";
    Podium[Podium["Italia"] = 2] = "Italia";
    Podium[Podium["Argentina"] = 3] = "Argentina";
    Podium[Podium["EEUU"] = 4] = "EEUU";
})(Podium || (Podium = {}));
var posicion = Podium.Italia;
console.log(posicion);
//Void es vacio 
function saludo(palabra) {
    console.log("".concat(palabra));
}
saludo('Buenos Dias');
//Never 
// function error(frase:string):never {
// throw new Error(frase)
// }
// error('Error, este codigo no se puede ejecutar 111')
// Null y Undefined
var nada = undefined;
var nulo = null;
