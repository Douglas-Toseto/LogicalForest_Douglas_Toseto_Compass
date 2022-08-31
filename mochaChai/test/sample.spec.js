import assert from 'assert'; // podemos fazer esse import direto, pois essa dependência está em modules
import chai from 'chai';

const expect = chai.expect;

describe('Meu primeiro teste', ()=>{
    it('Testando propriedade de objeto - tem um filho chamado Claudinei', () => {   //it.only executa apenas esse teste
        let pessoa = {
            nome : "Claudio",
            idade : 30,
            profissao : "Padeiro",
            conjuge : "Claudinéia",
            filhos : ["Claudinei", "Claudiomar", "Cléber"]
        }
        
        let varTeste = pessoa.filhos.find(element => element ==="Claudinei");

        //Sintaxe do Mocha:
        //assert.strictEqual(pessoa.filhos.find(element => element ==="Claudinei"), "Claudinei");

        //Sintaxe do Chai:
        expect(varTeste).to.be.equals("Claudinei").and.to.be.a('string');
        
    })

})