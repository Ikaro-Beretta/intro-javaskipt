
let notas = [10 , 5 , 4.35];
let produtos =['borracha', 'caderno','caneta'];

console.log(notas);
console.log(produtos);
console.log('1º produto da lista:' + produtos[0]);


notas[2] = 4.5;
console.log('nota corrigida: ' + notas[2]);

for (let cont= 0; cont< produtos.length; cont++) {
    console.log( cont + 1 +'º produto lista: ' + produtos[cont]);
}

for (const cont in notas) {
    console.log(parseInt(cont) + 1 + 'º nota:' + notas[cont]);
}

let listaprodutos = [
    {
        id: 1,
        nome: 'borracha',
        preco: '1.00'
    },
    {
        id: 2,
        nome: 'caderno',
        preco: '6.00'
    },
    {
        id: 3,
        nome: 'caneta',
        preco: '4.50'
    }
];

console.log('ID: ' + listaprodutos[2].id + '\n' + 'nome: ' + listaprodutos[2].nome + 
'\n' + 'preço: R$' + listaprodutos[2].preco);