var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });  //essa sintaxe parece diferir da doc: https://underscorejs.org/#filter

    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2,3,4]);
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(        // reduce pode ser usado para reduzir/agregar os números de um array em um único número (ex: somar os elementos de um array)
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0); //segundo a doc: memo: estado inicial da iteração e para armazenar os valores, x: valor atual da iteração, e o último parâmetro, aqui é 0, é a contagem inicial

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {  // na doc está como .every sobre https://underscorejs.org
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
                                                    //ATENÇÃO AQUI:
    expect(_(onlyEven).all(isEven)).toBe(true); // o retorno do .all é TRUE ou FALSE, é testado cada um dos elementos do array. Se todos os retornos forem TRUE, então .all será TRUE, caso contrário, FALSE.
    expect(_(mixedBag).all(isEven)).toBe(false);  // dá pra usar isso aqui bacana em mtas assertivas de teste
  });

  it("should use 'any' to test if any items passes condition" , function () {  // na doc está como .some
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true); // similar ao .all, mas retorna TRUE caso algum dos elementos do array tenha um retorno TRUE pela função
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {  // similar ao que temos no Python
      expect(_.range(3)).toEqual([0,1,2]);
      expect(_.range(1, 4)).toEqual([1,2,3]);  //lembrando que o STOP é exclusivo
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {   // função com a ideia de "achatar" um array, deixando mais fácil a leitura de um array aninhado. Ver ex. na doc: https://underscorejs.org/#flatten
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1,2,3,4]); // por padrão o nível de "achatamento" é 1
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();    // todos os métodos são chamados, até o .value

      expect(result).toEqual(6);
  });

});

