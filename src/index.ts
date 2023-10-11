import { BebeNormal } from "./model/BebeNomal";
import { BebePrematuro } from "./model/BebePrematuro";
import { BebeNatimorto } from "./model/BebeNatimorto";
import { PessoaFisica } from "./model/PessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";

const BN = new BebeNormal (`19192`, `Jade`, 5.6 , 0.50 , true);
console.log(BN);
BN.setId(`28329`);
BN.setNome(`Isis`);
BN.setPeso(5.1);
BN.setAltura(0.49);
BN.setVacinado(false);
console.log(BN.getId());
console.log(BN.getNome());
console.log(BN.getPeso());
console.log(BN.getAltura());
console.log(BN.getVacinado());

const BP = new BebePrematuro (`19387`, `Jade`, 5.2 , 0.48 , `38`);
console.log(BP);
BP.setId(`84739`);
BP.setNome(`Isis`);
BP.setPeso(5.0);
BP.setAltura(0.50);
BP.setSemanasGestacao(`39`);
console.log(BP.getId());
console.log(BP.getNome());
console.log(BP.getPeso());
console.log(BP.getAltura());
console.log(BP.getSemanasGestacao());

const BM = new BebeNatimorto (`18372`, `Jade`, 4.9 , 0.42 , `Tombo`);
console.log(BM);
BM.setId(`28379`);
BM.setNome(`Isis`);
BM.setPeso(5.0);
BM.setAltura(0.44);
BM.setCausa(`Aborto`);
console.log(BM.getId());
console.log(BM.getNome());
console.log(BM.getPeso());
console.log(BM.getAltura());
console.log(BM.getCausa());

const PF = new PessoaFisica (`Helena`, `2828389292`);
console.log(PF);
PF.setNome(`Hanna`);
PF.setCPF(`3993049842`);
console.log(PF.getNome());
console.log(PF.getCPF());

const PJ = new PessoaJuridica (`Hanny`, `22222222222`);
console.log(PJ);
PJ.setNome(`Jasmim`);
PJ.setCNPJ(`3456789232`);
console.log(PJ.getNome());
console.log(PJ.getCNPJ());







