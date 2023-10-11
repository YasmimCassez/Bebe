export abstract class Pessoa {
    private nome: string;

    public constructor(_nome: string){
        this.nome = _nome;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(_nome: string):void {
        this.nome = _nome;
    }
    public abstract documentoIdentificador(): string;

}