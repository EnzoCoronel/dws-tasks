//Exercício 1
console.log("Exercício 1:");

const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    ]
};
  
const fotos = produto.fotos;
  
// Sem destructuring:
const primeiraFotoSemDestructuring = fotos[0];
console.log(primeiraFotoSemDestructuring);

// Inicie o destructuring na linha abaixo ->
  
const [primeira, ...outras] = fotos;
console.log(primeira);

//Exercício 2
console.log("Exercício 2:");

const produto2 = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      fotoAdicional: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    }
};
  
// Sem destructuring:
const nomeSemDestructuring = produto2.nome;
const fotoPrincipalSemDestructuring = produto2.fotos.fotoPrincipal;
  
// Inicie o destructuring na linha abaixo ->

const {fotoPrincipal: info2} = produto2.fotos;
const {nome:info1} = produto2;
console.log(info1, info2);
  
//Exercício 3
console.log("Exercício 3:");

const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
};
  
const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    }
};
  
// Sem destructuring:
const fotoDoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
const fotoDoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;
  
// Inicie o destructuring na linha abaixo ->
  
const {fotoPrincipal: foto1} = primeiroProduto.fotos;
const {fotoPrincipal: foto2} = segundoProduto.fotos;
console.log(foto1, foto2);