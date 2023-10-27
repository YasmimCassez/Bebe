"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaFisica extends Pessoa_1.Pessoa {
    constructor(_nome, _CPF) {
        super(_nome);
        this.CPF = _CPF;
    }
    getCPF() {
        return this.CPF;
    }
    setCPF(_CPF) {
        this.CPF = _CPF;
    }
    documentoIdentificador() {
        return this.CPF;
    }
}
exports.PessoaFisica = PessoaFisica;
//# sourceMappingURL=PessoaFisica.js.map