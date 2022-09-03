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
        return Math.sin(valor);
    }

    static cos(valor){
        return Math.cos(valor);
    }

    static tang(valor){
        /*
        if (Math.cos(valor)!==0){
            return Math.sin(valor)/Math.cos(valor);   // como cos(PI/2) não é exatamente zero segundo os cálculos do JS, acontece esse problema [a tg(90º) pode ser calculada]
        } else {                                        // para validar corretamente, o valor deve ser diferente dos múltiplos de PI/2
            return 'indefinido';
        } */


        let aux = valor % (Math.PI/2);
        if (aux % 2 !== 0){           //o valor não pode ser "múltiplo ímpar" de PI/2, ie, não pode ser PI/2, 3PI/2, 5PI/2 ...
            return 'indefinido';
        } else {                                      
            return Math.sin(valor)/Math.cos(valor);   
        } 
        
    }
}