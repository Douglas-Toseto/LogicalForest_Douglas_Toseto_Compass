
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
    it('Teste coma com decimais: 8.4 com 5.25 deve resultar 13.65', ()=>{ 
        let resultado = Calculadora.soma(8.4, 5.25);
        expect(resultado).to.be.eq(13.65);
    })
    
})