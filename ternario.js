//exercício 1
console.log("Exercício 1:");

const cargo = "Programador";
let retorno = "";
	
cargo === "Programador" ? retorno = "Ótima profissão" : retorno = "Aprenda a programar";

console.log(retorno);

//exercício 2
console.log("Exercício 2:");

const checarMaiorDeIdade = (idade) => idade >= 18 ? true : false;

const minhaIdade = 18;
const podeDirigir = checarMaiorDeIdade(minhaIdade);

console.log(podeDirigir);

//exercício 3
console.log("Exercício 3:");

const checarImposto = (renda) => renda >= 10000 ? renda * 0.1 : renda * 0.08;

const minhaRenda = 9500;
const impostoCobrado = checarImposto(minhaRenda);

console.log(impostoCobrado);