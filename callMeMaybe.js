const empresas = [
    { nome:'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook', valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify', valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

//empresas criadas depois dos anos 1990;

let empresaAno = empresas.filter((empresas) => {
    return empresas.anoDeCriacao >= 1990;
})

//o nome de cada empresa e seu CEO;

let nameAndCeo = empresas.map((empresas) => {
    return founders = {nome: empresas.nome, CEO: empresas.CEO};
})

//o valor de mercado de todas as empresas somadas

let totalMercado = empresas.reduce((total, empresas) => {
    return total += empresas.valorDeMercado;
}, 0)

console.log(empresaAno)
console.log(nameAndCeo)
console.log(totalMercado)

//outro metodo

/*
let somenteValores = empresas.map((empresas) => {
    return valores = empresas.valorDeMercado;
})

let total2 = somenteValores.reduce((total, valores) => {
    return total += valores;
})

console.log(total2)
*/