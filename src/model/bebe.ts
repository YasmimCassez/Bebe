export  abstract class Bebe {
    private id: string;
    private nome: string;
    private peso: number;
    private altura: number;

    public constructor (_id: string,
                        _nome: string,
                        _peso: number,
                        _altura: number,){
                            this.id = _id;
                            this.nome = _nome;
                            this.peso = _peso;
                            this.altura = _altura;
                        }
    
    public getId(){
        return this.id;
    }                
    public setId(_id: string){
        this.id = _id;
    }

    public getNome(){
        return this.nome;
    }
    public setNome(_nome:string){
        this.nome = _nome;
    }

    public getPeso(){
        return this.peso;
    }
    public setPeso (_peso: number){
        this.peso = _peso;
    }

    public getAltura(){
        return this.altura;
    }
    public setAltura(_altura: number){
        this.altura = _altura;
    }




}
