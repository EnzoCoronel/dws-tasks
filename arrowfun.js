//Exercício 1
console.log("Exercício 1:");

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

const imprimeProduto = (nome, preco) => {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}

carrinho.forEach((carrinho) => {
    imprimeProduto(carrinho.nome, carrinho.preco)
})

//Exercício 2
console.log("Exercício 2:");

let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach((item) => {
    console.log(item);
})

//Exercício 3
console.log("Exercício 3:");

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map((palavrao) => palavrao.length);

console.log(tamanhos); // [ 22, 22, 44, 28 ]