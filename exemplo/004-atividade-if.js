let entrada = require('prompt-sync')();

let n1 = entrada('digite a orimeira nota: ');
let n2 = entrada('digite segunda nota: ');
 
let nota1 = parseInt(n1);
let nota2 = parseInt(n2);

let soma = nota1 + nota2;
let media = soma / 2 ;

if (media < 5 ) {
    console.log('sua nota é "I"');
}

if (media >= 5 && media <6.5){
    console.log('sua nota e "R"');
}

if (media >= 6.5 && media<8.5){
    console.log('sua nota e "B"');
}

if (media >= 8.5){
    console.log('sua nota e "MB"');
}