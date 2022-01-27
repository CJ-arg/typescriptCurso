var CLASES;
(function (CLASES) {
    var Bloque = /** @class */ (function () {
        function Bloque(posX, posY, ancho, alto, color) {
            this.posX = posX;
            this.posY = posY;
            this.ancho = ancho;
            this.alto = alto;
            this.color = color;
        }
        Bloque.prototype.dibujarCubos = function () {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
        };
        Bloque.prototype.moverCubos = function () {
            this.posY += 1;
        };
        return Bloque;
    }());
    CLASES.listaBloques = [];
    CLASES.listaBloques.push(new Bloque(32, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(170, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(207, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(344, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(481, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(569, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(702, 0, 32, 32, 'red'));
    CLASES.listaBloques.push(new Bloque(780, 0, 32, 32, 'red'));
})(CLASES || (CLASES = {}));
///<reference path="02clases.ts"/>
var canvas = document.querySelector('canvas');
var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
var cuerpo = document.querySelector('body');
canvas.whidth = 800;
canvas.height = 608;
canvas.style.border = "4px solid black";
canvas.style.backgroundColor = "grey";
cuerpo.style.backgroundColor = "black";
cuerpo.style.display = "flex";
cuerpo.style.justifyContent = "center";
function pintaFondo() {
    var escenario = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    for (var y = 0; y < 19; y++) {
        for (var x = 0; x < 25; x++) {
            if (escenario[y][x] == 0) {
                ctx.fillStyle = 'lightblue';
                ctx.fillRect(32 * x, 32 * y, 32, 32);
            }
            if (escenario[y][x] == 1) {
                ctx.fillStyle = 'darkgreen';
                ctx.fillRect(32 * x, 32 * y, 32, 32);
            }
        }
    }
    CLASES.listaBloques.map(function (bloque) {
        var coorX = Math.round(bloque.posX / 32);
        var coorY = Math.round(bloque.posY / 32);
        bloque.dibujarCubos();
        if (escenario[coorY][coorX] == 1)
            bloque.moverCubos();
    });
}
function principalAnimar() {
    requestAnimationFrame(principalAnimar);
    canvas.whidth = 800;
    canvas.height = 608;
    pintaFondo();
}
principalAnimar();
///<reference path="02clases.ts"/>
CLASES.listaBloques.map(function (bloques) {
    document.addEventListener('keydown', function (e) {
        if (e.key == 'd' || e.key == 'D') {
            bloques.posX += 5;
        }
        if (e.key == 'a' || e.key == 'A') {
            bloques.posX -= 5;
        }
    });
});
