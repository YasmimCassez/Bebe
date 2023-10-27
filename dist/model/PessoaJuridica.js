"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaJuridica extends Pessoa_1.Pessoa {
    constructor(_nome, _CNPJ) {
        super(_nome);
        this.CNPJ = _CNPJ;
    }
    getCNPJ() {
        return this.CNPJ;
    }
    setCNPJ(_CNPJ) {
        this.CNPJ = _CNPJ;
    }
    documentoIdentificador() {
        return this.CNPJ;
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map