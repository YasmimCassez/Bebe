"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebePrematuro = void 0;
const bebe_1 = require("./bebe");
class BebePrematuro extends bebe_1.Bebe {
    constructor(_id, _nome, _peso, _altura, _semanasGestacao) {
        super(_id, _nome, _peso, _altura);
        this.semanasGestacao = _semanasGestacao;
    }
    getSemanasGestacao() {
        return this.semanasGestacao;
    }
    setSemanasGestacao(_semanasGestacao) {
        this.semanasGestacao = _semanasGestacao;
    }
}
exports.BebePrematuro = BebePrematuro;
//# sourceMappingURL=BebePrematuro.js.map