import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa {
    private CNPJ: string;

    public constructor(_nome: string,
                        _CNPJ: string,){
                        super(_nome);
                        this.CNPJ = _CNPJ;
                        }
    public getCNPJ(){
        return this.CNPJ;
    }
    public setCNPJ(_CNPJ:string):void{
        this.CNPJ = _CNPJ;
    }
    public documentoIdentificador(): string {
        return this.CNPJ;
    }
}