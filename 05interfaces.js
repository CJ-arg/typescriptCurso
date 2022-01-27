var susana = {
    nombre: "Susana",
    apellido: "Gonzalez",
    apellido2: "Jimenez",
    edad: 34,
    isCasado: true,
    running: function () {
        return true;
    }
};
var Personas = /** @class */ (function () {
    function Personas(nombre, apellido, apellido2, edad, isCasado, empleo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
        this.edad = edad;
        this.isCasado = isCasado;
        this.empleo = empleo;
    }
    Personas.prototype.running = function () {
        return true;
    };
    return Personas;
}());
var pajaro;
pajaro = function (valor) {
    return valor;
};
console.log(pajaro(true));
