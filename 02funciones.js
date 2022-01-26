//funcion declarada
function saludo(frase) {
    console.log("".concat(frase));
    return "".concat(frase);
}
saludo('Buenos Dias');
//funcion expresada
var despedida = function (despedida) {
    return "".concat(despedida);
};
console.log(despedida('hasta luego'));
// Funcion Flecha
var position = function (posY) {
    return posY;
};
console.log(position(8));
// Funcion Suma Flecha
var suma = function (num1, num2) {
    return "".concat(num1 + num2);
};
console.log(suma(8, 4));
//devuelve string por template literals 
var suma2 = function (num1, num2) {
    return num1 + num2;
};
console.log(suma2(8, 4));
//devuelve numero
//parametros opcionales o por defecto
function salto(posY, posX) {
    if (posY === void 0) { posY = 65; }
    return posY;
}
console.log(salto());
console.log(salto(8));
//parametros arrays por operador rest ...
function animales() {
    var listaAnimales = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaAnimales[_i] = arguments[_i];
    }
    return listaAnimales;
}
console.log(animales('pato', 'oso', 'buey', 'raton'));
