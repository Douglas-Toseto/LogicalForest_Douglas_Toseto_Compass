/* //mini atividade - printar 3 variáveis no log
var nome = 'Douglas';
var idade = 32;
var peso = 65.5
console.log('Olá, meu nome é '+ nome + ', tenho '+idade+' e peso '+peso+' kg.')
*/

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------

/* // mini projeto 11 - criar um objeto contendo as propriedades Rua, Cidade, Cep, e uma função exibirEndereco(endereco) que recebe
// um obj e exibe suas propriedades (creio que seria interessante um método do obj que já fizesse isso...)
function criaEndereco(rua, cidade, cep){
    return {
        rua,
        cidade,
        cep,
        //exibirEndereco () {  //testando um método para exibir as propriedades
        //    console.log(rua, cidade, cep);
        //}
    }
}

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave,endereco[chave]);
    }
}

let novoEndereco = criaEndereco('XV de Novembro', 'Rio Preto', 15000000);
exibirEndereco(novoEndereco);
//console.log(novoEndereco.exibirEndereco());  //testando o método para exibir
*/

// ----------------------------------------------------------------------------------------------------------------------------------------

/* // mini projeto 12 - comparação de objetos
// criar uma função para comparar os valores das propriedades de dois objetos
// criar outra função para compara os endereços de memória de dois objetos

//primeiramente irei definir uma Constructor Function (e depois comparar se tem diferença com uma Factory Function)

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

function propriedadesIguais(obj1, obj2){
    if (Object.keys(obj1).length != Object.keys(obj2).length){
        return false; //os objetos possuem uma quantidade diferente de propriedades, portanto são diferentes, assim podemos sair da função retornando false
    }
    for (let chave in obj1){
        if (obj1[chave]!==obj2[chave]){
            return false;
        }
    }
    return true; //se chegou até aqui é pq tem o msm número de propriedades e todas são iguais
}

let endereco1 = new Endereco('XV de Novembro', 'RP', 15000000);
let endereco2 = new Endereco('XV de Novembro', 'RP', 15000000);
// endereco2.bairro = 'São Francisco'; //adicionando uma nova propriedade
//console.log(endereco2);
//console.log(propriedadesIguais(endereco1,endereco2));

let end1 = criaEndereco('XV de Novembro', 'RP', 15000000); //função definida na atividade 11 (linha 195)
let end2 = criaEndereco('XV de Novembro', 'RP', 15000000);
//end2.bairro = 'São Francisco';
console.log(propriedadesIguais(end1,end2)); // OK, então a comparação atributo-a-atributo funciona independente da forma com que o objeto é instanciado

function endMemoriaIguais(obj1, obj2){
    return obj1 === obj2; //qdo fazemos a comparação estrita dos objetos estamos comparando seus endereços de mem., pois eles foram criados em end. diferentes. Objs armazenam end de memória de suas propriedades (funcionam como ponteiros)
}

console.log(endMemoriaIguais(end1,end2));
*/ 

// ----------------------------------------------------------------------------------------------------------------------------------------

/* // mini projeto 13 - criar o obj de postagem de blog com as propriedades estabelecidas
function criaPostagem(titulo, mensagem, autor, visualizacoes, comentarios, aoVivo){
    return {
        titulo,
        mensagem,
        autor,
        visualizacoes,
        comentarios,
        aoVivo
    }
}

let novaPostagem = criaPostagem('Testando', 'Msg de teste', 'Eu mesmo', 32, [{autor : 'lucas', coment : 'mtobomcara!'},{autor : 'luiz', coment : 'meohdeos q fera'}], false);
console.log(novaPostagem);

//comentário do gabarito: as propriedades comentários e aoVivo seriam "dinâmicas" e não seriam definidas na construção do objeto,
//assim podemos fazer uma função construtora desse objeto sem esses parâmetros, definindo essas propriedades como Zero por padrão:
function Postagem(titulo, mensagem, autor, visualizacoes){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacoes = visualizacoes,
    this.comentarios = [],
    this.aoVivo = false
}
*/

// ----------------------------------------------------------------------------------------------------------------------------------------

/* //mini projeto 14 - faixa de preços
// criar um array de objetos de faixas de preços, contendo das propriedades: toolTip, min, max

function Faixa(toolTip, minimo, maximo){
    this.toolTip = toolTip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas = [
    new Faixa('até 700', 0, 700), 
    new Faixa('até 1000', 700, 1000), 
    new Faixa('até 2000', 1000, 2000)
]
console.log(faixas);
*/

// ----------------------------------------------------------------------------------------------------------------------------------------

/* // Testando o método .find:
let games = [
    {nome : 'Horizon', console : 'PS'},
    {nome : 'Xenoblade', console : 'Switch'},
    {nome : 'Bom Da Guerra', console : 'PS'}
]

//const game = games.find(function(games){
//    return games.console === 'PS';
//})
//usando a notação de Arrow Function:
const game = games.find(games => games.console === 'PS');

console.log(game);

// testando o splice
let lista = ['a','b','c','d'];
lista.splice(2,1);
console.log(lista);
*/

// ----------------------------------------------------------------------------------------------------------------------------------------

// mini projeto: formulario HTML DOM
//aproveitando pra usar switch case


function verificaEntrada(){
    let nome = document.getElementById('nome').value;
    let convite = document.getElementById('convite').value;
    switch (convite){
        case 'Jhonathan': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'Luiz':
                case 'Carlos':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
        case 'Douglas': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'José':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
        case 'Eduardo': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'Maria':
                case 'Filomena':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break:
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
    }
}