"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bebe = void 0;
class Bebe {
    constructor(_id, _nome, _peso, _altura) {
        this.id = _id;
        this.nome = _nome;
        this.peso = _peso;
        this.altura = _altura;
    }
    getId() {
        return this.id;
    }
    setId(_id) {
        this.id = _id;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
}
exports.Bebe = Bebe;
//# sourceMappingURL=bebe.js.map