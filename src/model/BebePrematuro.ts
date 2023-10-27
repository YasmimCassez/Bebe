import { Bebe } from "./bebe";

export class BebePrematuro extends Bebe {
    private semanasGestacao: string;

    public constructor (_id: string,
        _nome: string,
        _peso: number,
        _altura: number,
        _semanasGestacao: string,){
            super (_id, _nome, _peso, _altura)
            this.semanasGestacao = _semanasGestacao;
        }
public getSemanasGestacao(){
    return this.semanasGestacao;
}
public setSemanasGestacao(_semanasGestacao: string): void{
    this.semanasGestacao = _semanasGestacao;
}
}
