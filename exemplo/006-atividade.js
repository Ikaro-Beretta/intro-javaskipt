/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let entrada = require('prompt-sync')();

let v1 = entrada ('Insira o valor inicial: ');
let v2 = entrada ('Insira o valor final: ');

let valorinicial = parseInt(v1);
let valorfinal = parseInt(v2);
// Verifica se o valor inicial é menor que o valor final
if (valorinicial < valorfinal) {
  // Contagem crescente
  for (let i = valorinicial; i <= valorfinal; i++) {
    console.log(i);
  }
} else if (valorinicial > valorfinal) {
  // Contagem decrescente
  for (let i = valorinicial; i >= valorfinal; i--) {
    console.log(i);
  }
} else {
  // Se os valores são iguais, imprime apenas um valor
  console.log("os valores sao iguais.");
}
