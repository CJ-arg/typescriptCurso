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
        Bloque.prototype.dibujar = function () {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
        };
        Bloque.prototype.mover = function () {
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
var ctx = canvas.getContext('2d');
var cuerpo = document.querySelector('body');
canvas.width = 800;
canvas.height = 608;
canvas.style.border = "4px solid black";
canvas.style.backgroundColor = "grey";
cuerpo.style.backgroundColor = 'black';
cuerpo.style.display = "flex";
cuerpo.style.justifyContent = "center";
function pinta() {
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
        var coorY = Math.round(bloque.posY / 31);
        bloque.dibujar();
        if (escenario[coorY][coorX] == 0)
            bloque.mover();
    });
}
function principal() {
    requestAnimationFrame(principal);
    canvas.width = 800;
    canvas.height = 608;
    pinta();
}
principal();
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
