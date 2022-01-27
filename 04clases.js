var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Protagonista = /** @class */ (function () {
    function Protagonista(posX, posY, ancho, alto) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
    }
    Protagonista.prototype.saltar = function () {
        this.posY += 4;
        return this.posY;
    };
    Object.defineProperty(Protagonista.prototype, "getAncho", {
        get: function () {
            return this.ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Protagonista.prototype, "setAncho", {
        set: function (dato) {
            this.ancho = dato;
        },
        enumerable: false,
        configurable: true
    });
    return Protagonista;
}());
var protagonista = new Protagonista(100, 400, 50, 50);
var Secundario = /** @class */ (function (_super) {
    __extends(Secundario, _super);
    function Secundario(posX, posY, ancho, alto, color) {
        var _this = _super.call(this, posX, posY, ancho, alto) || this;
        _this.color = color;
        return _this;
    }
    Secundario.prototype.informacion = function () {
        console.log(this.ancho);
    };
    return Secundario;
}(Protagonista));
var secundario = new Secundario(233, 34, 45, 34, 'blue');
