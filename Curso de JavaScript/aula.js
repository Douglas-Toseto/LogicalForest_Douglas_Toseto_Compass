/* //mini atividade - printar 3 variáveis no log
var nome = 'Douglas';
var idade = 32;
var peso = 65.5
console.log('Olá, meu nome é '+ nome + ', tenho '+idade+' e peso '+peso+' kg.')
*/

/* //mini projeto 1 - trocar valor de variáveis
let a = 'vermelho';
let b = 'azul';
let temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
*/

/* //mini projeto 2 - função para máximo entre dois valores
function numMaior(n1,n2){
    if (n1>n2) {
        console.log(n1+' é maior que '+n2);
    } else if (n1<n2){
        console.log(n1+' é menor que '+n2);
    } else {
        console.log('Os números são iguais');
    }
}
numMaior(5,7);
*/

/* //mini projeto 3 - FizzBuzz
// Divisível por 3 -> Fizz
// Divisível por 5 -> Buzz
// Divisível por 3 e 5 -> FizzBuzz
// Não divisível por 3 ou 5 -> retorna a própria entrada
// Entrada não numérica -> retorna 'Não é um número'

function fizzBuzz(valor){
    if (valor%15===0){
        return 'FizzBuzz';
    } else if (valor%3===0){
        return 'Fizz';
    } else if (valor%5===0){
        return 'Buzz';
    } else if (typeof valor === "number"){
        return valor;
    }
    return 'Não é um número';    
}
console.log(fizzBuzz(true));
*/


 /* //mini projeto 4 - medidor de velocidade
//Velocidade máxima: 70km/h
//a cada 5km acima do limite, vc ganha 1 ponto na carteira
//função para arredondamento para baixo: Math.Floor()
//Se número de pontos > 12 então "Carteira Suspensa"

function verificarVelocidade(vel){
    const velMax = 70;
    const pontoPorKm = 5;
    if (vel >= (12*pontoPorKm+velMax)){  //ficou meio torta essa lógica, a princíprio tinha comparado com um valor constante vel>=130
        console.log('Carteira Suspensa.');
    } else if (vel>velMax){
        let pontos = Math.floor((vel-velMax)/pontoPorKm);
        console.log(pontos+' pontos.');        
    } else {
        console.log('OK!');
    }
}
verificarVelocidade(60);
*/

/* //mini projeto 5 - par ou ímpar
//função que recebe um valor limite, avalia cada número até o valor e retorna PAR ou ÍMPAR para cada caso
function exibirTipo(valor){
    for (let i=0; i<=valor; i++){
        if (i%2===0){
            console.log(i+' é PAR!');
        } else
            console.log(i+' é ÍMPAR!');
    }
}
exibirTipo(4)
*/

/* //mini projeto 6 - criar uma função que recebe um obj como parâmetro e exibe apenas as propriedades que são strings
let game = {
    nome : 'Horizon',
    ano : 2022,
    console : 'PS',
    diretor : 'Mathijs de Jonge',
    genero : 'RPG',
    numeroDeJogadores : 1
}

function exibirPropriedades(obj){
    for(let chave in obj){
        if (typeof obj[chave] === 'string'){
            console.log(chave, obj[chave]);
        }
    }
}

exibirPropriedades(game);
*/

/*// mini projeto 7 - criar uma função que recebe um valor e soma todos os multiplos de 3 e 5 até aquele valor
function soma(valor){
    let soma = 0;
    for (let i=0; i<=valor; i++){
        if (i%3 === 0){soma+=i}
        if (i%5 === 0){soma+=i}
    }
    return soma;
}
console.log(soma(10));
*/


/* // mini projeto 8 - criar uma função que calcula a média de notas a partir de um array
// 0-59: F; 60 - 69: D; 70 - 79: C; 80 - 89: B; 90 - 100: A
const listaNotas = [90, 90, 95];

function mediaDoAluno(notas){
    let soma = 0;
    for (let i=0; i<notas.length; i++){
        soma += notas[i];
    }
    let media = soma/notas.length;
    if (media<59){return 'F'};
    if (media<69){return 'D'};
    if (media<79){return 'C'};
    if (media<89){return 'D'};
    return 'A' //caso média não seja <89, ocorrerá esse retorno
}

console.log(mediaDoAluno(listaNotas));
*/

/* // mini projeto 9 - exibir asteriscos
//criar uma função para exibir * por linha, a depender do parametro passado

function exibirAsteriscos(linha){
    let tempStr = '';
    for (let i=1; i<=linha; i++){
        tempStr += '*';
        console.log(tempStr);
    }
}
exibirAsteriscos(10);
*/

/* // mini projeto 10 - criar uma função que recebe um valor e lista os números primos até aquele valor
function numerosPrimos(valor){
    for (let i=2; i<=valor; i++){
        let primo = true;
        for (let n=2; n<i; n++){
            if (i%n===0){
                primo = false;
            }
        }
        if (primo==true){
            console.log(i)
        }
    }
}
numerosPrimos(2);
*/


