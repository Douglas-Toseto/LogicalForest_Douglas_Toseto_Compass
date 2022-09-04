export default class Calculadora {

    static soma(a, b){
        return a+b;
    }

    static sub(a, b){
        return a-b;
    }

    static mult(a, b){
        return a*b;     
    }

    static div(a, b){
        if (a===0 && b===0){
            return "indeterminado";  // 0/0 é indeterminação
        }
        return a/b;
        
    }

    static exp(a,b){            //testar dps tbm Math.pow(base, exp)
        if (a===0 && b===0){
            return "indeterminado";  // 0^0 é indeterminação
        }
        //return a**b;
        return Math.pow(a,b);
    }

    static sqr(a,b){ //no obj global Math não há um método para raíz de índice qualquer, apenas para raiz quadrada. Esse método aqui tem a forma sqr(radicando, índice)
        /*
        if (b%2!==0 || a>=0){ //se o índice é impar ou a>=0, ok
            return Math.pow(a,1/b);
        } else { // caiu aqui pq b par e a neg
            return 'indeterminado'
        } */
        if (a>=0){
            return Math.pow(a,1/b);
        } else {
            return 'indeterminado'
        }
    }

    static fat(n){
        if (n>=0){
            let aux = 1;
            while(n>0){
                aux *= n;
                n--;
            }
            return aux;
        } else {
            return 'indeterminado';
        }        
    }

    static log(b, l){   //função no formato log(base, logaritmando)    doc de Math.log: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/log
        if (b>0){
            return Math.log(l)/Math.log(b); //mudança de base
        } else {
            return 'indeterminado'; // caso não for tratado esse problema, o retorno é NaN
        }   
    }

    static ordena(vetor){
        /*
        for (var i = 0; i < vetor.length; i++) {                //bubble sort
            for (var j = 0; j < (vetor.length - i - 1); j++) { 
                if(vetor[j] > vetor[j+1]) {
                    var tmp = vetor[j]; 
                    vetor[j] = vetor[j+1]; 
                    vetor[j+1] = tmp; 
                }
            }        
        }
        return vetor;
        */
        return vetor.sort();
    }

    static seno(valor){
        let vsen = Math.sin(valor);             
        if (Math.abs(vsen)<0.000000000000001){  
            return 0;
        } else {
            return vsen;
        }
    }

    static cos(valor){
        let cosseno = Math.cos(valor);              //IF para "forçar" o retorno que deveria, pois mesmo com lib externa esse fenômeno acontece
        if (Math.abs(cosseno)<0.000000000000001){  // pois o cos(Pi/2) retorna um valor muito próx. de Zero: 6.123233995736766e-17, e não exatamente zero como deveria
            return 0;
        } else {
            return cosseno;
        }
    }

    static tang(valor){
        /* //essa função funciona no Python, mas aqui no JS não funcionou nem com a lib Decimal.js
        let aux = valor % (Math.PI/2);
        if (aux % 2 !== 0){           //o valor não pode ser "múltiplo ímpar" de PI/2, ie, não pode ser PI/2, 3PI/2, 5PI/2 ...
            return 'indefinido';
        } else {                                      
            return Math.sin(valor)/Math.cos(valor);   
        } */ 

        // método para avaliar o retorno com base num valor limite (pois, por ex, tan(PI/2) está retornando um valor alto, ao invés de infinito
        // e tan(PI) está retornando um valor pequeno, ao invés de exatamente zero
        let tangente = Math.tan(valor); 
        if (tangente > 200000000000000){  //valor limite razoávelmente alto
            return 'indefinido';
        } else if (Math.abs(tangente) < 0.000000000000001){ //valor razoávelmente pequeno
            return 0;
        } else {
            return tangente;
        }
        
    }
}