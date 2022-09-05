import assert from 'assert';
import chai from 'chai';

import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;

describe('Testes de Soma', () => {
    it('Teste soma de dois inteiros positivos: 3 com 7 deve resultar 10', ()=>{ 
        let resultado = Calculadora.soma(3, 7);
        expect(resultado).to.be.eq(10);
    })
    it('Teste soma de positivo com negativo: -5 com 2 deve resultar -3', ()=>{ 
        let resultado = Calculadora.soma(-5, 2);
        expect(resultado).to.be.eq(-3);
    })
    it('Teste soma de positivo com negativo: 10 com -7 deve resultar 3', ()=>{ 
        let resultado = Calculadora.soma(10, -7);
        expect(resultado).to.be.eq(3);
    })
    it('Teste doma de dois inteiros negativos: -12 com -8 deve resultar -20', ()=>{ 
        let resultado = Calculadora.soma(-12, -8);
        expect(resultado).to.be.eq(-20);
    })
    it('Teste soma com elemento neutro: 10 com 0 deve resultar 10', ()=>{ 
        let resultado = Calculadora.soma(10, 0);
        expect(resultado).to.be.eq(10);
    })
    it('Teste soma com decimais: 8.4 com 5.25 deve resultar 13.65', ()=>{ 
        let resultado = Calculadora.soma(8.4, 5.25);
        expect(resultado).to.be.eq(13.65);
    })
    
})

describe('Testes de Subtração', () => {
    it('Teste subtração de dois inteiros positivos: 7 com 3 deve resultar 4', ()=>{ 
        let resultado = Calculadora.sub2(7, 3);
        expect(resultado).to.be.eq(4);
    })
    it('Teste subtração de dois inteiros positivos: 3 com 7 deve resultar -4', ()=>{ 
        let resultado = Calculadora.sub2(3, 7);
        expect(resultado).to.be.eq(-4);
    })
    it('Teste subtração de inteiro positivo com negativo: 5 com -4 deve resultar 9', ()=>{ 
        let resultado = Calculadora.sub2(5, -4);
        expect(resultado).to.be.eq(9);
    })
    it('Teste subtração de inteiro negativo com positivo: -5 com 4 deve resultar -9', ()=>{ 
        let resultado = Calculadora.sub2(-5, 4);
        expect(resultado).to.be.eq(-9);
    })
    it('Teste subtração de inteiros negativos: -6 com -7 deve resultar 1', ()=>{ 
        let resultado = Calculadora.sub2(-6, -7);
        expect(resultado).to.be.eq(1);
    })
    it('Teste subtração com elemento neutro: 0 com 5 deve resultar -5', ()=>{ 
        let resultado = Calculadora.sub2(0, 5);
        expect(resultado).to.be.eq(-5);
    })
    it('Teste subtração com decimais: 10.125 com 12.642 deve resultar -2.517', ()=>{ 
        let resultado = Calculadora.sub2(10.125, 12.642);
        expect(resultado).to.be.eq(-2.517);   // operações com decimais em JS não são precisas. https://www.w3schools.com/js/js_numbers.asp
    })                                          // considerando as particularidades do JS, o valor esperado deve ser -2.5169999999999995 ao invés de -2.517

    it('Teste subtração com qtde diferente de casas decimais: 2.75 com 7.1236 deve resultar -4.3736', ()=>{ 
        let resultado = Calculadora.sub2(2.75, 7.1236);
        expect(resultado).to.be.eq(-4.3736);
    })
})

describe('Testes de Multiplicação', () => {
    it('Teste multiplicação de inteiros positivos: 3 com 5 deve resultar 15', ()=>{
        let resultado = Calculadora.mult(3, 5);
        expect(resultado).to.be.eq(15);
    })
    it('Teste multiplicação de inteiro positivo com negativo: 8 com -6 deve resultar -48', ()=>{
        let resultado = Calculadora.mult(8, -6);
        expect(resultado).to.be.eq(-48);
    })
    it('Teste multiplicação de inteiros negativos: -10 com -11 deve resultar 110', ()=>{
        let resultado = Calculadora.mult(-10, -11);
        expect(resultado).to.be.eq(110);
    })
    it('Teste multiplicação com elemento neutro: -7 com 1 deve resultar -7', ()=>{
        let resultado = Calculadora.mult(-7, 1);
        expect(resultado).to.be.eq(-7);
    })
    it('Teste multiplicação com zero: 145 com 0 deve resultar 0', ()=>{
        let resultado = Calculadora.mult(145, 0);
        expect(resultado).to.be.eq(0);
    })
    it('Teste multiplicação com decimais: 4.5 com 1.5 deve resultar 6.75', ()=>{
        let resultado = Calculadora.mult(4.5, 1.5);
        expect(resultado).to.be.eq(6.75);
    })
})

describe('Testes de Divisão', ()=>{
    it('Teste divisão exata de inteiros positivos : 15 com 5 deve resultar 3', ()=>{
        let resultado = Calculadora.div(15, 5);
        expect(resultado).to.be.eq(3);
    })
    it('Teste divisão de inteiro positivo com negativo : 2 com -32 deve resultar 3', ()=>{
        let resultado = Calculadora.div(2, -32);
        expect(resultado).to.be.eq(-0.0625);
    })
    it('Teste divisão com elemento neutro : 25 com 1 deve resultar 25', ()=>{
        let resultado = Calculadora.div(25, 1);
        expect(resultado).to.be.eq(25);
    })
    it('Teste divisão com zero : 0 com -5000 deve resultar 0', ()=>{
        let resultado = Calculadora.div(0, -5000);
        expect(resultado).to.be.eq(0);
    })
    it('Teste divisão por zero : 15 com 0 deve resultar 3', ()=>{
        let resultado = Calculadora.div(15, 0);
        expect(resultado).to.be.eq(Infinity);       // sobre Infinity : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity
    })
    it('Teste divisão zero por zero : 0 com 0 deve resultar indeterminado', ()=>{
        let resultado = Calculadora.div(0, 0);
        expect(resultado).to.be.eq("indeterminado");
    })
})

describe('Testes de Exponencial', ()=>{
    it('Teste base e exp. positivos: 2^5 deve resultar em 32',()=>{
        let resultado = Calculadora.exp(2, 5);
        expect(resultado).to.be.eq(32);
    })
    it('Teste base neg. e exp. positivos: -3^4 deve resultar em 81',()=>{
        let resultado = Calculadora.exp(-3, 4);
        expect(resultado).to.be.eq(81);
    })
    it('Teste base pos. e exp. negativo: 2^(-2) deve resultar em 0.25',()=>{
        let resultado = Calculadora.exp(2, -2);
        expect(resultado).to.be.eq(0.25);
    })
    it('Teste base neg. e exp. negativo: -2^(-3) deve resultar em -0.125',()=>{
        let resultado = Calculadora.exp(-2, -3);
        expect(resultado).to.be.eq(-0.125);
    })
    it('Teste base pos. e exp. fracionário: 16^0.5 deve resultar em 4',()=>{  //exp. fracionário equivale à raíz 
        let resultado = Calculadora.exp(16, 0.5);
        expect(resultado).to.be.eq(4);
    })
    it('Teste exp. unitário: -70^1 deve resultar em -70',()=>{
        let resultado = Calculadora.exp(-70, 1);
        expect(resultado).to.be.eq(-70);
    })
    it('Teste exp. nulo: 500^0 deve resultar em 1',()=>{
        let resultado = Calculadora.exp(500, 0);
        expect(resultado).to.be.eq(1);
    })
    it('Teste base nula e exp. positivos: 0^10 deve resultar em 0',()=>{
        let resultado = Calculadora.exp(0, 10);
        expect(resultado).to.be.eq(0);
    })
    it('Teste base e exp. nulos: 0^0 deve resultar indeterminado',()=>{
        let resultado = Calculadora.exp(0, 0);
        expect(resultado).to.be.eq('indeterminado');
    })  
})

describe('Testes de Raizes', ()=>{
    it('Teste radicando inteiro pos. e índice par: raíz quadrada de 169 deve resultar em 13', ()=>{
        let resultado = Calculadora.sqr(169,2);
        expect(resultado).to.be.eq(13);
    })
    it('Teste radicando inteiro neg. e índice par: raíz quadrada de -25 não existe', ()=>{
        let resultado = Calculadora.sqr(-25,2);
        expect(resultado).to.be.eq('indeterminado'); 
    })
    it('Teste radicando inteiro neg. e índice ímpar: raíz cúbica de -27 deve resultar em -3', ()=>{
        let resultado = Calculadora.sqr(-27,3);
        expect(resultado).to.be.eq('indeterminado');             //NOTA sobre JS: bases negativas com expoentes fracionários sempre retornam NaN, então Math não deve ser suficiente para calcular raíz desses números
    })                                              // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
                                                    // considerando essa caractarística da linguagem, não serão calculadas raízes de números negativos
    it('Teste radicando inteiro pos. e índice 0: indeterminação', ()=>{
        let resultado = Calculadora.sqr(169,0);
        expect(resultado).to.be.eq(Infinity);  //169^(1/0) retorna Infinity, mas acredito que seria melhor tratar esse caso na Classe
    })

    it('Teste de índice negativo',()=>{         //não é usual, mas raiz é exp fracionário, então nada impede disso ocorrer
        let resultado = Calculadora.sqr(16,-2);
        expect(resultado).to.be.eq(0.25);
    })
})

describe('Testes de Fatoriais',()=>{
    it('Teste fat. de número maior que 1: 6! deve resultar em 720',()=>{
        let resultado = Calculadora.fat(6);
        expect(resultado).to.be.eq(720);
    })
    it('Teste fatorial de 1: 1! deve resultar em 1',()=>{
        let resultado = Calculadora.fat(1);
        expect(resultado).to.be.eq(1);
    })
    it('Teste fatorial de 0: 0! deve resultar em 1',()=>{
        let resultado = Calculadora.fat(0);
        expect(resultado).to.be.eq(1);
    })
    it('Teste fatorial de número negativo: indeterminado',()=>{ //não está definido fat de negativos
        let resultado = Calculadora.fat(-2);
        expect(resultado).to.be.eq('indeterminado');
    })
})

describe('Testes de Logarítmos', ()=>{
    it('Teste base positiva, logaritmando positivo: Log de 25 na base 5 deve resultar em 2',()=>{
        let resultado = Calculadora.log(5,25); //log(base, logaritmando)
        expect(resultado).to.be.eq(2);
    })
    it('Teste base positiva, logaritmando 1: deve resultar em zero',()=>{
        let resultado = Calculadora.log(10,1); 
        expect(resultado).to.be.eq(0);
    })
    it('Teste base positiva, logaritmando nulo: deve retornar indeterminação (-infinito)',()=>{
        let resultado = Calculadora.log(10,0); 
        expect(resultado).to.be.eq(-Infinity);
    })
    it('Teste base negativa, logaritmando positivo: indeterminação',()=>{ //não existe logaritmo de número negativo
        let resultado = Calculadora.log(-2,16); 
        expect(resultado).to.be.eq('indeterminado');  
    })
})

describe('Testes de Ordenação', ()=>{
    it('Teste com valores numéricos apenas: [3,1,4,2] deve resultar [1,2,3,4]',()=>{
        let resultado = Calculadora.ordena([3,1,4,2]);          // Testar comparação como strings
        expect(resultado.toString()).to.be.eq("1,2,3,4");      // a comparação não confere por array ser tipo de ref?????
        //assert.strictEqual(resultado,[1, 2, 3, 4]);
    })
    it('Teste com valores alfabéticos apenas: [Cláudio,Lucas,Daniela,Ana] deve resultar [Ana,Cláudio,Daniela,Lucas]',()=>{
        let resultado = Calculadora.ordena(['Cláudio','Lucas','Daniela','Ana']);
        expect(resultado.toString()).to.be.eq("Ana,Cláudio,Daniela,Lucas");
    })
    it('Teste com valores mistos: [Cláudio,1,Daniela,12] deve resultar [1, 12, Cláudio, Daniela]',()=>{
        let resultado = Calculadora.ordena(['Cláudio',1,'Daniela',12]);
        expect(resultado.toString()).to.be.eq("1,12,Cláudio,Daniela");
    })
    
})

describe('Testes de Seno', ()=>{
    it('Teste seno de 0 rad: deve resultar zero',()=>{
        let resultado = Calculadora.seno(0);
        expect(resultado).to.be.eq(0);
    })
    it('Teste seno de pi/2 rad: deve resultar 1',()=>{
        let resultado = Calculadora.seno(Math.PI/2);
        expect(resultado).to.be.eq(1);
    })
})

describe('Testes de Cosseno', ()=>{
    it('Teste cosseno de 0 rad: deve resultar 1',()=>{
        let resultado = Calculadora.cos(0);
        expect(resultado).to.be.eq(1);
    })
    it('Teste seno de pi/2 rad: deve resultar 0',()=>{
        let resultado = Calculadora.cos(Math.PI/2);         //retorna um valor muito próx. de Zero: 6.123233995736766e-17
        expect(resultado).to.be.eq(0); 
    })
})

describe('Testes de Tangente', ()=>{
    it('Teste tangente de 0 rad: deve resultar 0',()=>{
        let resultado = Calculadora.tang(0);
        expect(resultado).to.be.eq(0);
    })
    it('Teste tangente de pi/2 rad: deve resultar indefinido',()=>{  //não existe tan(90º)
        let resultado = Calculadora.tang(Math.PI/2);
        expect(resultado).to.be.eq('indefinido');       
    })
    it('Teste tangente de PI rad: deve resultar 0',()=>{
        let resultado = Calculadora.tang(Math.PI);
        expect(resultado).to.be.eq(0);
    })
})