"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebeNormal = void 0;
const bebe_1 = require("./bebe");
class BebeNormal extends bebe_1.Bebe {
    constructor(_id, _nome, _peso, _altura, _vacinado) {
        super(_id, _nome, _peso, _altura);
        this.vacinado = _vacinado;
    }
    getVacinado() {
        return this.vacinado;
    }
    setVacinado(_vacinado) {
        this.vacinado = _vacinado;
    }
}
exports.BebeNormal = BebeNormal;
//# sourceMappingURL=BebeNomal.js.map