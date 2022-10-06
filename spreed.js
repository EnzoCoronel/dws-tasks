//Exercício 1
console.log("Exercício 1:");

const moradoresDeRecife = ["Mateus", "João", "Maria", "José"];
const moradoresDePOA = ["Joana", "Isabela", "Guilherme", "Enzo"];
const moradoresBrasil = [...moradoresDeRecife, ...moradoresDePOA, "Victoria", "Thales"]
console.log(moradoresBrasil);

//Exercício 2
console.log("Exercício 2:");

const apartamentoPadrao = {
	quartos: 2,
	metrosQuadrados: 50,
	temVaranda: true,
}

// Utilize o spreed para copiar os valores do apartamentoPadrao

const apartamentoCobertura = {
    ...apartamentoPadrao,
    temPiscina: true,
    temChurrasqueira: true,
    quartos: 3,
    metrosQuadrados: 80,
}

console.log(apartamentoCobertura);