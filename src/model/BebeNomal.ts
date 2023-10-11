import { Bebe } from "./bebe";

export class BebeNormal extends Bebe {
    private vacinado: boolean;

    public constructor (_id: string,
        _nome: string,
        _peso: number,
        _altura: number,
        _vacinado: boolean,){
            super (_id, _nome, _peso, _altura)
            this.vacinado = _vacinado;
        }

        public getVacinado(){
            return this.vacinado;
        }

        public setVacinado(_vacinado:boolean){
            this.vacinado = _vacinado;
        }
}