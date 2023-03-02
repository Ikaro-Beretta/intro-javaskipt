let entrada = require('prompt-sync')();

let idade = entrada('digite sua idade:');

if (idade === 18){
    console.log('voce pode se matricular na outo escola');
}

if(idade > 18){
    console.log('voce tem idade para dirigir caso tenha a habilitação');
}

if(idade< 18){
    console.log('voce n tem idade para dirigir!');
}

//console.log('a idade digitada é:'+ idade);

if (idade>18) {
    console.log('vc tem iadde para dirigir caso tenha habilitação.');
} else if (idade <18) {
    console.log('vc n tem iadde para dirigir!');
} else {
    console.log('vc pode se matricular na auto-escola!');
}

if (idade >=18) {
    console.log('maior');
} else {
    console.log('menor');
}