import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    private CPF: string;
    public constructor (_nome: string,
                        _CPF: string,){
                    super (_nome);
                    this.CPF = _CPF;
    }

    public getCPF(){
        return this.CPF;
    }
    public setCPF(_CPF:string):void {
        this.CPF = _CPF;
    }
    public documentoIdentificador(): string {
        return this.CPF;
    }
}