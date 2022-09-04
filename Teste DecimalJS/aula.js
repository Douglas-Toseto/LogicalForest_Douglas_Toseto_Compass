import {Decimal} from './node_modules/decimal.js/decimal.mjs';
//Testes usando a Lib Decimal.JS

let pi = Decimal.acos(-1); //Pi com a lib decimal.js, possui uma precisão levemente melhor
console.log('Valor de PI pela Math padrão: '+Math.PI+', pela Decimal.JS: '+pi);

//comparando a subtração (que tbm estava dando problema do JS)
let a = new Decimal(10.125);
let b = new Decimal(a).sub(12.512);
console.log('Sub de decimais: '+ b.valueOf());  //o Decimal é um obj, o método valueOf retorna seu valor (na forma de string)


let testeTan0 = new Decimal(0)
console.log('Tangente de 0: '+testeTan0.tan().valueOf()); //deveria dar zero

let testeTanPi = new Decimal(pi)
console.log('Tangente de PI: '+testeTanPi.tan().valueOf());  //deveria dar zero

let testeTan90 = new Decimal(pi/2)
console.log('Tangente de PI/2: '+testeTan90.tan().valueOf());  //deveria ser indefinido/infinito


//definindo a função para calcular a tangente, removendo os valores inválidos:
function tang(valor){
    let aux = valor % (pi/2);
            if (aux % 2 !== 0){           //o valor não pode ser "múltiplo ímpar" de PI/2, ie, não pode ser PI/2, 3PI/2, 5PI/2 ...
                return 'indefinido';
            } else {                                      
                return Number(Decimal.sin(valor).valueOf())/Number(Decimal.cos(valor).valueOf());   
            } 
    }


//Agora testando a função e comparando com os valores retornados pela lib:
console.log('Tangente de PI, pela lib: '+testeTanPi.tan().valueOf()+', pela função: '+tang(pi));

console.log('Tangente de PI/2, pela lib: '+testeTan90.tan().valueOf()+', pela função: '+tang(pi/2));



//Método Gabiarra - Definir uma função que atribui e avalia um valor limite da tangente, e a partir dele faz uma classificação
// mas primeiro preciso definir qual seria o valor limitante

console.log(Math.tan(Math.PI/2));
console.log(Math.tan(3*Math.PI/2)) //>>>>>>>ATENÇÃO: ISSO DEVERIA SER NEGATIVO!! O VALOR TENDE A (-)INFINITO JESUS
console.log(Decimal.tan(3*Math.PI/2).valueOf()); //pelo visto a Decimal.js corrige esse problema

console.log("-----------------------------------------------------------------");
console.log("Avaliando os valores das tangentes de i*PI/2 usando a decimal.js:")
//valores que não deveriam existir, mas o JS está retornando como valores grandes. O sinal deve ser alternado, um positivo e outro negativo.
for (let i=1; i<30; i+=2){
    console.log(Decimal.tan(i*pi/2).valueOf()); 
}

console.log("-----------------------------------------------------------------");
console.log("Avaliando os valores das tangentes de i*PI usando a decimal.js:")
//valores que deveriam ser zero:
for (let i=0; i<20; i+=2){
    console.log(Decimal.tan(i*pi).valueOf()); 
}

console.log("-----------------------------------------------------------------");

function tangL(valor){    
    let tangente = Math.tan(valor); //vou me manter com os recursos padrões do JS
    if (tangente > 200000000000000){  //pelas observações, valor razoávelmente alto
        return 'indefinido';
    } else if (Math.abs(tangente) < 0.000000000000001){ //valor razoávelmente pequeno
        return 0;
    } else {
        return tangente;
    }
}
console.log('Testando a função gabiarra:')
console.log('Tangente de PI/2: '+tangL(Math.PI/2));
console.log('Tangente de Zero: '+tangL(Math.PI));
